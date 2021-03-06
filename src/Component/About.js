import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import imgAbout from "../Images/imgAbout.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import email from "../Images/email.png";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="w-auto rounded shadow-md h-auto">
      <Helmet>
        <title>About | Panthon Kansap</title>
      </Helmet>
      <div className="w-50 h-auto rounded shadow-lg bottom-2 bg-indigo-500">
        <div className="flex justify-between">
          <div className="m-2">
            <img
              src={profile}
              alt="profile"
              className="h-12 w-auto hover:ml-2"
            ></img>
          </div>

          <div
            className="max-h-max grid items-center ml-56 font-prompt text-lg text-gray-50 hover:text-gray-600"
            id="headTitle"
          >
            " The purpose of our lives is to be happy "
          </div>

          <div className="flex items-center" id="nav">
            <div>
              <p className="ml-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm ">
                <Link to="/">
                  <i className="fi fi-rr-home text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    HOME
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm ">
                <Link to="../about">
                  <i className="fi fi-rr-info text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    ABOUT
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm  ">
                <Link to="../skills">
                  <i class="fi fi-rr-head-side-thinking text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    SKILLS
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm  ">
                <Link to="../portfolio">
                  <i class="fi fi-rr-briefcase text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    PORTFOLIO
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 mr-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm  ">
                <Link to="../contact">
                  <i class="fi fi-rr-form text-xl" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    CONTACT
                  </div>
                </Link>
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
              <h1 className=" text-xl font-semibold font-prompt text-indigo-500">
                About
              </h1>
              <h1 className="font-prompt text-sm mt-2">
                <p className="text-gray- font-medium">Hello everyone,</p>
                <p className="text-gray-500">
                  {" "}
                  my name is Mr. Panthon Kansap. My nickname is F.??I am now 21
                  years old. I live in Nakhon Sawan Province.??provinces in the
                  central region of Thailand.??I am currently studying at Chiang
                  Mai University.??In the Faculty of Engineering,?? Computer
                  Engineering
                </p>
              </h1>

              <div className="flex items-center">
                <div>
                  <h1 className=" text-xl font-semibold font-prompt text-indigo-500 mt-8">
                    Education
                  </h1>
                  <h1 className="font-prompt text-sm  mt-2">
                    <p className="text-gray-500">
                      <p className="text-gray-800 font-medium">
                        Kindergarten and elementary schools
                      </p>
                      <p className="ml-2">- Wat Niwet Wuttharam School</p>
                      <p className="text-gray-800 font-medium mt-2">
                        High school
                      </p>
                      <p className="ml-2">- Navamintrachuthit Matchim School</p>
                      <p className="text-gray-800 font-medium mt-2">
                        I am currently studying for a bachelor's degree.
                      </p>
                      <p className="ml-2">- Chiang Mai University</p>
                    </p>
                  </h1>
                </div>

                <div className="mt-14">
                  <img src={imgAbout} alt="" className="w-44"></img>
                </div>
              </div>

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
            ?? Copyright ??2022, Panthon Kansap
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
