import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 420, damping: 34, mass: 0.32 };
const TEXT_SELECTOR = [
  "textarea",
  "[contenteditable='true']",
  "input:not([type='button']):not([type='checkbox']):not([type='color']):not([type='file']):not([type='hidden']):not([type='image']):not([type='radio']):not([type='range']):not([type='reset']):not([type='submit'])",
].join(", ");

function isTextTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(TEXT_SELECTOR));
}

function ClickBurst() {
  return (
    <motion.svg
      viewBox="0 0 26 26"
      className="absolute left-0 top-0 h-6 w-6 overflow-visible text-white"
      initial={{ scale: 0.6, opacity: 0.55, x: -7, y: -7 }}
      animate={{ scale: 1.08, opacity: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      style={{
        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.55))",
      }}
    >
      {[
        "M13 1.5V5.5",
        "M21.5 4.5L18.5 7.5",
        "M24.5 13H20.5",
        "M4.5 4.5L7.5 7.5",
        "M1.5 13H5.5",
      ].map((path) => (
        <path
          key={path}
          d={path}
          stroke="currentColor"
          strokeWidth="1.95"
          strokeLinecap="round"
        />
      ))}
    </motion.svg>
  );
}

function PointerCursor({ clicking }: { clicking: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="block h-[1.72rem] w-[1.72rem] text-white"
      animate={{ scale: clicking ? 0.92 : 1 }}
      transition={{ type: "spring", stiffness: 620, damping: 34 }}
      style={{
        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.6))",
      }}
    >
      <path
        d="M20.92 9.94Q21.78 10.26 21.8 10.76Q21.81 11.15 21.36 11.34L14.22 14.19Q13.95 14.3 13.83 14.57L11.03 21.46Q10.81 22 10.37 21.98Q9.95 21.96 9.75 21.44L3.21 4.17Q3 3.63 3.34 3.28Q3.68 2.95 4.18 3.14L20.55 9.35Q20.84 9.46 20.92 9.94Z"
        fill="rgba(10, 10, 10, 0.96)"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function CursorFollower() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const [hiddenForText, setHiddenForText] = useState(false);
  const hasPointerPosition = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  useEffect(() => {
    const fine =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!fine || reduceMotion) return;

    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const syncTextMode = (target: EventTarget | null) => {
      setHiddenForText(isTextTarget(target));
    };

    const syncPointerPosition = (e: MouseEvent, immediate = false) => {
      if (immediate || !hasPointerPosition.current || !visible) {
        x.jump(e.clientX);
        y.jump(e.clientY);
        sx.jump(e.clientX);
        sy.jump(e.clientY);
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
      }

      hasPointerPosition.current = true;
    };

    const revealCursor = (e: MouseEvent) => {
      syncPointerPosition(e, true);
      setVisible(true);
    };

    const move = (e: MouseEvent) => {
      syncPointerPosition(e);
      syncTextMode(e.target);
      setVisible(true);
    };

    const down = (e: MouseEvent) => {
      revealCursor(e);
      syncTextMode(e.target);
      if (e.button !== 0 || isTextTarget(e.target)) return;
      setClicking(true);
      setPulseKey((key) => key + 1);
    };

    const over = (e: MouseEvent) => {
      revealCursor(e);
      syncTextMode(e.target);
    };
    const up = () => setClicking(false);
    const hideCursor = () => {
      setVisible(false);
      setClicking(false);
    };
    const handleWindowExit = (e: MouseEvent) => {
      if (!e.relatedTarget) hideCursor();
    };
    const handleVisibilityChange = () => {
      if (document.hidden) hideCursor();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseout", handleWindowExit);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseout", handleWindowExit);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!active) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10050] will-change-transform"
      style={{
        x: sx,
        y: sy,
      }}
      animate={{
        opacity: visible && hasPointerPosition.current && !hiddenForText ? 1 : 0,
        scale: visible && hasPointerPosition.current && !hiddenForText ? 1 : 0.96,
      }}
      transition={{ duration: 0.14, ease: "easeOut" }}
      aria-hidden
    >
      <motion.div
        className="relative"
        animate={{ x: -3.6, y: -3.6 }}
        transition={{ type: "spring", stiffness: 700, damping: 42 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {pulseKey > 0 ? <ClickBurst key={pulseKey} /> : null}
        </AnimatePresence>

        <PointerCursor clicking={clicking} />
      </motion.div>
    </motion.div>
  );
}

export default CursorFollower;
