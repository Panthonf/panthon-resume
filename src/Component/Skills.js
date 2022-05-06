import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import email from "../Images/email.png";
import Helmet from "react-helmet";

function Skills() {
  return (
    <div className="w-auto rounded shadow-md h-auto">
      <Helmet>
        <title>Skills | Panthon Kansap</title>
      </Helmet>
      <div className="w-50 h-auto rounded shadow-lg bottom-2 bg-indigo-500">
        <div className="flex justify-center">
          <div className="m-2">
            <img src={profile} alt="profile" className="h-12 w-auto"></img>
          </div>

          <div className="flex mt-4" id="nav">
            <div>
              <p className="my-2 ml-2 text-center text-white text-xs font-prompt font-bold hover:text-gray-800 hover:text-sm ">
                <Link to="/">HOME</Link>
              </p>
            </div>
            <div>
              <p className="my-2 ml-2 text-center text-white text-xs font-prompt font-bold hover:text-gray-800 hover:text-sm ">
                <Link to="../about">ABOUT</Link>
              </p>
            </div>
            <div>
              <p className="my-2 ml-2 text-center text-white text-xs font-prompt font-bold hover:text-gray-800 hover:text-sm  ">
                <Link to="../skills">SKILLS</Link>
              </p>
            </div>
            <div>
              <p className="my-2 ml-2 text-center text-white text-xs font-prompt font-bold hover:text-gray-800 hover:text-sm  ">
                <Link to="../portfolio">PORTFOLIO</Link>
              </p>
            </div>
            <div>
              <p className="my-2 ml-2 mr-2 text-center text-white text-xs font-prompt font-bold hover:text-gray-800 hover:text-sm  ">
                <Link to="../contact">CONTACT</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-2">
        {/*column 2  Part and details*/}
        <div>
          <div className="flex justify-center">
            <div className="w-96 my-auto mt-8 max-h-max mx-4">
              <h1 className=" text-2xl font-semibold font-prompt text-indigo-500">
                Skills
              </h1>
              <h1 className="font-prompt text-sm mt-4">
                <p className="text-gray- font-medium">- LANGUAGES SKILLS</p>
                <div className="flex justify-between  mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>Thai</li>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-400 font-semibold">Native</p>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>English</li>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-400 font-semibold">Medium</p>
                  </div>
                </div>
              </h1>

              <h1 className="font-prompt text-sm mt-4">
                <p className="text-gray- font-medium">- COMPUTER SKILLS</p>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>HTML</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300 ">
                      <div className="bg-indigo-400 w-36 h-full "></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>CSS</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-36 h-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>JAVASCRIPT</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-28 h-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>REACT JS</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-28 h-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>PHP</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-8 h-full"></div>
                    </div>
                  </div>
                </div>
              </h1>

              <h1 className="font-prompt text-sm mt-4">
                <p className="text-gray- font-medium">
                  - INTERPERSONAL/LIFE SKILLS
                </p>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>Analitical Skills</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-32 h-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>Detail-Oriented</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-40 h-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>Good Team Player</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-36 h-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-gray-500 ml-8">
                      <li>Multi-Tasking</li>
                    </p>
                  </div>
                  <div className="grid content-center">
                    <div className="w-40 h-2.5 bg-gray-300">
                      <div className="bg-indigo-400 w-36 h-full"></div>
                    </div>
                  </div>
                </div>
              </h1>

              <div className="flex justify-center mt-8">
                <div className="mx-2">
                  <a href="https://github.com/Panthonf">
                    <img src={github} alt="" width="30px"></img>
                  </a>
                </div>
                <div>
                  <a href="https://web.facebook.com/panthonkansap">
                    <img src={facebook} alt="" width="30px"></img>
                  </a>
                </div>
                <div className="mx-2">
                  <a href="mailto:panthon.f@gmail.com">
                    <img src={email} alt="" width="30px"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 mt-4">
          <p className=" text-center text-indigo-400 text-xs font-prompt font-light">
            © Copyright ©2022, Panthon Kansap
          </p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
