import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Role = "user" | "assistant";

interface Msg {
  role: Role;
  content: string;
}

const CHAT_TITLE = "Ask me anything.";
const CHAT_SUBTITLE =
  "Ask about projects, research, internships, writing, podcasting, or how Panav likes to build.";
const PROMPT_POOL = [
  "Which of your projects feels most representative of you?",
  "Tell me about EarthDefenders and the Swift Challenge connection.",
  "What makes LearnX meaningful to you?",
  "Why did you build Red Alert?",
  "What problem was GoFit trying to solve?",
  "What does TextShield show about your AI work?",
  "Which project pushed you the most technically?",
  "If I only open one project, which one should I start with?",
];

function getRandomPromptPool(count = 3): string[] {
  const pool = [...PROMPT_POOL];

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(
        <strong key={`${match.index}-strong`} className="font-semibold text-neutral-100">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      nodes.push(
        <em key={`${match.index}-em`} className="italic text-neutral-300">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      nodes.push(
        <code
          key={`${match.index}-code`}
          className="rounded bg-white/[0.07] px-1.5 py-0.5 font-mono text-[0.92em] text-neutral-200"
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderMessageContent(content: string): ReactNode {
  const blocks = content.split(/\n{2,}/);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").filter(Boolean);
    const bulletLines = lines.every((line) => /^[-*]\s+/.test(line.trim()));

    if (bulletLines) {
      return (
        <ul
          key={`block-${blockIndex}`}
          className="my-2 list-disc space-y-1 pl-5 marker:text-neutral-500"
        >
          {lines.map((line, lineIndex) => (
            <li key={`bullet-${blockIndex}-${lineIndex}`}>
              {renderInlineMarkdown(line.replace(/^[-*]\s+/, ""))}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={`block-${blockIndex}`} className={blockIndex === 0 ? "" : "mt-3"}>
        {lines.map((line, lineIndex) => (
          <span key={`line-${blockIndex}-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            {renderInlineMarkdown(line)}
          </span>
        ))}
      </p>
    );
  });
}

async function fetchAiReply(history: Msg[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: history
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || err?.detail || "Groq is not working right now.");
  }

  const data = await res.json();
  if (typeof data.reply === "string" && data.reply.trim()) return data.reply.trim();
  throw new Error("Groq is not working right now.");
}

function AskPanavChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [suggestions] = useState<string[]>(() => getRandomPromptPool());
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const submitMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || sending) return;

      const userMsg: Msg = { role: "user", content: text };
      const history = [...messages, userMsg];
      setInput("");
      setMessages(history);
      setSending(true);

      try {
        const reply = await fetchAiReply(history);
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              error instanceof Error && error.message.trim()
                ? error.message.trim()
                : "Groq is not working right now.",
          },
        ]);
      } finally {
        setSending(false);
      }
    },
    [messages, sending]
  );

  const send = useCallback(async () => {
    await submitMessage(input);
  }, [input, submitMessage]);

  return (
    <section className="pb-16 w-full">
      <div className="w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <div className="border-b border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] px-5 py-5 sm:px-6">
          <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            Ask about Panav
          </div>
          <h2 className="text-[1.8rem] font-medium tracking-tight text-neutral-100">
            {CHAT_TITLE}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
            {CHAT_SUBTITLE}
          </p>

          {messages.length === 0 && (
            <div className="mt-5 space-y-1.5">
              {suggestions.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => void submitMessage(prompt)}
                  className="group flex w-full items-start gap-2 rounded-xl px-2 py-2 text-left transition-colors hover:bg-white/[0.04]"
                >
                  <span className="mt-[1px] text-sm text-neutral-600 transition-colors group-hover:text-neutral-400">
                    ↳
                  </span>
                  <span className="text-[15px] leading-relaxed text-neutral-400 transition-colors group-hover:text-neutral-200">
                    {prompt}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {(messages.length > 0 || sending) && (
          <div className="max-h-[min(320px,50vh)] space-y-3 overflow-y-auto px-5 py-4 text-sm leading-relaxed sm:px-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-6 rounded-2xl border border-white/[0.08] bg-white/[0.06] px-3.5 py-2.5 text-neutral-200"
                    : "mr-6 text-neutral-400"
                }
              >
                {renderMessageContent(m.content)}
              </div>
            ))}
            {sending && (
              <div className="mr-6 text-xs text-neutral-600">Thinking…</div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        <div className="flex gap-2 border-t border-white/[0.06] p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
            placeholder="Ask about a project, research thread, internship, or idea…"
            className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#0a0a0a]/80 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-white/20 cursor-auto"
            disabled={sending}
            aria-label="Chat message"
          />
          <button
            type="button"
            onClick={send}
            disabled={sending || !input.trim()}
            className="shrink-0 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white disabled:opacity-40 cursor-auto"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default AskPanavChat;
