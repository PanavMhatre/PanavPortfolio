import wwdc24 from "../assets/wwdc24.jpeg";
import UNTLogo from "../assets/UNTLogo.png";
import dartmouthhealth from "../assets/dartmouthhealth.png";
import lme from "../assets/lme.jpg";
import HPE from "../assets/HPE.jpg";
import NASA from "../assets/nasa.jpg";
import MIT from "../assets/MIT.jpg";
import EarthDefender from "../assets/EarthDefenders.png";
import LearnX from "../assets/LearnX.png";
import RedCross from "../assets/redalert.png";
import GoFit from "../assets/GoFit.png";

import { Link } from "@nextui-org/react";
function Home() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center justify-start px-24">
      <div className="w-full max-w-screen-xl pt-20 animate-fade-up">
        <section className="bg-white text-left">
          <div
            className="max-w-screen-xl w-full relative mb-20"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="place-self-center lg:col-span-7 ml-[150px] pr-[240px]">
              <h1 className="mb-4 text-3xl font-extrabold text-black">
                Hi, this is Panav 👋
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-600">
                I have a strong enthusiasm for creating innovative algorithms
                and programs, driven by a deep passion for the fields of AI,
                Robotics, and Computer Science.
              </p>

              <div className="flex space-x-4"></div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="relative lg:col-span-5 flex items-center justify-center mt-10 h-96 pb-36">
            <img
              src={wwdc24}
              className="absolute top-[2rem] transform -translate-x-[17.6rem] z-0 w-[19rem] -rotate-[4deg] rounded-xl"
            />
            <img
              src={HPE}
              className="absolute top-[0rem] left-1/2 transform -translate-x-1/2 z-0 opacity-90 w-[16rem] rotate-[2deg] rounded-xl"
            />
            <img
              src={lme}
              className="absolute top-[2rem]  transform translate-x-[17.5rem] z-0 opacity-85 w-[19rem] -rotate-[5.5deg] rounded-xl"
            />
          </div>
        </section>
      </div>
      <div className="w-full bg-white">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section className="bg-white animate-fade-up">
            <div className="grid max-w-screen-xl ml-[150px] pr-[240px] mb-20">
              <div className="lg:col-span-7">
                <h1 className="text-left text-black mb-4 text-3xl font-extrabold">
                  About Me
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 ">
                  <p className="" style={{ lineHeight: "1.5" }}>
                    Hi, I'm Panav! I am deeply passionate about the fields of
                    AI, Robotics, and Computer Science, with a strong foundation
                    in various programming languages such as Python, Java, SQL,
                    XML, Dart, and Git. My experience includes working with
                    technologies such as Flutter, Swift, Numpy, Matplotlib,
                    Seaborn, and Pandas. While I am proud of what I have
                    accomplished so far, I am eager to delve deeper into more
                    advanced coding languages, engineering concepts, and ML/AI
                    concepts to further develop my skills and keep pace with the
                    latest developments in these exciting fields. Specifically,
                    I am interested in exploring natural language processing and
                    machine learning applications in robotics. I am highly
                    motivated to continue my education and training, and I am
                    excited to contribute my skills and knowledge to the rapidly
                    evolving landscape of AI, Robotics, and Computer Science.
                  </p>
                </p>
              </div>
              <div className="lg:col-span-5 lg:flex lg:items-start">
                <div className="flex space-x-2 mt-4">
                  <Link
                    href="https://github.com/panavmhatre"
                    type="button"
                    className="w-36 h-12 text-stone-700 bg-gray-200 font-medium rounded-lg text-sm px-5 text-center flex items-center justify-center transition-all"
                  >
                    Github
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#404040"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/panav-m-70982b243/"
                    type="button"
                    className="w-36 h-12 text-stone-700 bg-gray-200 font-medium rounded-lg text-sm px-5 text-center flex items-center justify-center transition-all"
                  >
                    LinkedIn
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#404040"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full bg-white">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section className="bg-white animate-fade-up">
            <div className="grid max-w-screen-xl ml-[150px] pr-[240px]">
              <div className="lg:col-span-7">
                <h1 className="text-left text-black mb-4 text-3xl font-extrabold">
                  Experience
                </h1>
                <div className="max-w-2xl mb-6 font-light text-gray-500 ">
                  <a className="" style={{ lineHeight: "1.5" }}>
                    I specialize in Python, Java, Machine Learning, and Data
                    Science, and I'm always learning new things to stay on the
                    cutting edge of technology. I've had the opportunity to work
                    and intern at a range of institutions and companies that
                    have strengthened my technical foundation. 
                  </a>
                  <ul className=" mx-auto mt-10 max-w-lg divide-y divide-gray-200 dark:divide-gray-700 mb-20 animate-fade-up">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://admission.stanford.edu/assets/cardinal/images/stanford_block_s_logo2.jpg"
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Stanford University
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            ML Research Assistant
                          </p>
                        </div>
                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                          09/2024 - Present
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={dartmouthhealth}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dartmouth Health
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            ML Researcher
                          </p>
                        </div>
                        <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                          05/2024 - Present
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={UNTLogo}
                            alt="UNT"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            University of North Texas
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Research Trainee
                          </p>
                        </div>
                        <div className="inline-flex text-sm items-center text-base text-gray-900 dark:text-white">
                          06/2023 - 07/2023
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={NASA}
                            alt="NASA"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            NASA
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            High School Intern
                          </p>
                        </div>
                        <div className="inline-flex text-sm items-center text-base text-gray-900 dark:text-white">
                          09/2023 - 04/2024
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={MIT}
                            alt="MIT"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            MIT
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Researcher
                          </p>
                        </div>
                        <div className="inline-flex text-sm items-center text-base text-gray-900 dark:text-white">
                          07/2023 - 08/2024
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full bg-white mb-20">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section className="bg-white animate-fade-up">
            <div className="grid max-w-screen-xl ml-[150px] pr-[240px]">
              <div className="lg:col-span-7">
                <h1 className="text-left text-black mb-4 text-3xl font-extrabold">
                  Projects
                </h1>
                <div className="max-w-2xl mb-6 font-light text-gray-500 ">
                  <a className="" style={{ lineHeight: "1.5" }}>
                  I have practically used my coding skills in order to help solve problems around the world. Here are some of my projects I have worked on to showcase my technical abilities.

                  </a>
                  <div className="px-6 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {[
                        {
                          title: "GoFit",
                          description:
                            "Open source mobile app built with Java to help students get fit.",
                          img: GoFit,
                          alt: "GoFit",
                        },
                        {
                          title: "Red Alert",
                          description:
                            "A real-time visualization tool that helps vulnerable populations be safe from natural disasters.",
                          img: RedCross,
                          alt: "Climate Tracker",
                        },
                        {
                          title: "LearnX",
                          description:
                            "Platform for rural students to access curated learning paths with interactive coding challenges.",
                          img: LearnX,
                          alt: "LearnX",
                        },
                        {
                          title: "EarthDefenders",
                          description:
                            "Mobile app that gamifies climate action and educates users on sustainability through quizzes and AR.",
                          img: EarthDefender,
                          alt: "EarthDefenders",
                        },
                      ].map((card, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[330px]"
                        >
                          <img
                            src={card.img}
                            alt={card.alt}
                            className="w-full h-48 object-cover rounded-t-xl"
                          />
                          <div className="p-5 flex-1 flex flex-col">
                            <h2 className="text-xl text-black font-bold mb-2">
                              {card.title}
                            </h2>
                            <p className="text-gray-600 text-sm">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
