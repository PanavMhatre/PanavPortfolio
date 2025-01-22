import wwdc24 from "../assets/wwdc24.jpeg";
import UNTLogo from "../assets/UNTLogo.png";
import dartmouthhealth from "../assets/dartmouthhealth.png";
import lme from "../assets/lme.jpg";
import HPE from "../assets/HPE.jpg";
import { Link } from "@nextui-org/react";
function Home() {
  return (
    <div className="bg-white w-full pl-72 pr-72 relative">
      {/* <NavBar></NavBar> */}
      <div className="portfolio-container animate-fade-up ml-[150px] relative pr-[240px] pt-20">
        <section className="bg-white text-left">
          <div
            className="max-w-screen-xl w-full relative mb-20"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="place-self-center lg:col-span-7">
              <h1 className="mb-4 text-3xl font-extrabold text-black">
                Hi, this is Panav 👋
              </h1>
              <p className="max-w-2xl mb-6 font-light text-black">
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
        {/* <Footer></Footer> */}
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
                <div className="">
                  <Link
                    isExternal
                    href="https://github.com/panavmhatre"
                    showAnchorIcon
                    size="lg"
                    className="mt-4 flex"
                    color="foreground"
                  >
                    Follow on Github
                  </Link>
                  <Link
                    isExternal
                    href="https://www.linkedin.com/in/panav-m-70982b243/"
                    showAnchorIcon
                    size="lg"
                    className="mt-4 flex"
                    color="foreground"
                  >
                    Follow on LinkedIn
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
            <div className="grid max-w-screen-xl ml-[150px] pr-[240px] mb-20">
              <div className="lg:col-span-7">
                <h1 className="text-left text-black mb-4 text-3xl font-extrabold">
                  Experience
                </h1>
                <div className="max-w-2xl mb-6 font-light text-gray-500 ">
                  <a className="" style={{ lineHeight: "1.5" }}>
                    I specialize in Python, Java, Machine Learning, and Data
                    Science. But I am always learning new things. Here are some
                    of the places I have worked.
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
                    {/* <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
        }}
      ></div>
    </div>
  );
}

export default Home;
