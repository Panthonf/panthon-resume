import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import imgHome from "../Images/imgHome.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import email from "../Images/email.png";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="w-auto rounded shadow-md h-auto">
      <Helmet>
        <title>Home | Panthon Kansap</title>
      </Helmet>
      <div className="w-50 h-auto rounded-b-lg shadow-3xl bottom-2 bg-indigo-500">
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
                <Link to="about">
                  <i className="fi fi-rr-info text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    ABOUT
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm  ">
                <Link to="skills">
                  <i class="fi fi-rr-head-side-thinking text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    SKILLS
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm  ">
                <Link to="portfolio">
                  <i class="fi fi-rr-briefcase text-lg" id="icon"></i>
                  <div className="text-xs" id="Hidden">
                    PORTFOLIO
                  </div>
                </Link>
              </p>
            </div>
            <div>
              <p className="ml-4 mr-4 text-center text-white text-xs font-prompt font-bold hover:text-gray-600 hover:text-sm  ">
                <Link to="contact">
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
            <div className="w-52 my-auto max-h-max mx-4">
              <h1 className=" text-xl font-prompt text-indigo-500 hover:rotate-2 hover:mb-4">
                Hello, I’m Aef.
              </h1>
              <h1 className="font-prompt text-lg  text-black">
                I am Web developer, from Thailand,
              </h1>
              <div className="mt-2 w-32 h-8 border-2 border-gray-300 hover:border-gray-400 bg-gray-300 rounded">
                <p className="mx-auto hover:rotate-2 my-1 max-w-max text-base font-extralight font-prompt text-indigo-500 hover:font-bold">
                  <Link to="contact">Contact Me</Link>
                </p>
              </div>
            </div>
            <div className="my-8 mr-2">
              <img
                src={imgHome}
                alt="home_1"
                className="w-72 hover:border-indigo-400 hover:border-2 hover:rotate-2 hover:rounded-xl"
              ></img>
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-4">
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
        <div className="m-2">
          <p className=" text-center text-indigo-400 text-xs font-prompt font-light">
            © Copyright ©2022, Panthon Kansap
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
