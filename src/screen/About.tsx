// import { Link } from "@nextui-org/react";
// import { Image } from "@nextui-org/react";
import NavBar from "../components/NavBar";
// import PanavImage from "../assets/PanavSquare.png";
// import Footer from "../components/Footer";
import UNTLogo from "../assets/UNTLogo.png";
import jpmorganchase from "../assets/jpmorganchase.jpg";
import dartmouthhealth from "../assets/dartmouthhealth.png";
function About() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-full bg-white pl-72 pr-72 mt-20">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section className="bg-white animate-fade-up">
            <div className="grid max-w-screen-xl ml-[150px] pr-[240px] mb-20">
              <div className="">
                <h1 className="text-black mb-4 text-3xl font-extrabold">
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
              {/* <div className="lg:col-span-5 lg:flex lg:items-start ml-5">
                            <div className="">
                                <Image
                                    width={400}
                                    alt="NextUI hero Image"
                                    src={PanavImage}
                                    className="rotate-2"
                                />
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-10 flex"
                                    color="foreground"
                                >
                                    Follow on Twitter
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4 flex"
                                    color="foreground"
                                >
                                    Follow on Github
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4 flex"
                                    color="foreground"
                                >
                                    Follow on LinkedIn
                                </Link>
                                <Link
                                    isExternal
                                    href="https://github.com/nextui-org/nextui"
                                    showAnchorIcon
                                    size="lg"
                                    className="mt-4"
                                    color="foreground"
                                >
                                    Follow on Instagram
                                </Link>
                            </div>
                        </div> */}
            </div>
          </section>
        </div>
        <h1 className="ml-[150px] mb-4 text-black mb-4 text-3xl font-extrabold">
          Experience
        </h1>

        <ul className="mx-auto mt-10 max-w-lg divide-y divide-gray-200 dark:divide-gray-700 mb-20">
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full"
                  src={jpmorganchase}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  JP Morgan Chase
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Software Engineering Intern
                </p>
              </div>
              <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                06/2024 - Present
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
          {/* <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-2.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li> */}
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
  );
}

export default About;
