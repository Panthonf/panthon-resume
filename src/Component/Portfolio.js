import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import email from "../Images/email.png";
import toDoList from "../Images/toDoList.jpg";
import Helmet from "react-helmet";
function Portfolio() {
  return (
    <div className="w-auto rounded shadow-md h-auto">
      <Helmet>
        <title>Portfolio | Panthon Kansap</title>
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
              <h1 className=" text-2xl font-semibold font-prompt text-indigo-500">
                Portfolio
              </h1>

              <div class="w-50 mx-auto mt-4">
                <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                  <a href="#">
                    <img class="rounded-t-lg" src={toDoList} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="text-indigo-500 font-bold text-2xl tracking-tight mb-2">
                        To Do List Website
                      </h5>
                    </a>
                    <p class="font-normal text-gray-700 mb-3">
                      This is the first web site design that has a front-end
                      line using html, CSS, and JavaScript. It is a to-do list
                      site where tasks or activities can be added and can be
                      clicked successfully or deleted. However, this website
                      does not yet work with back-end lines.
                    </p>
                    <a
                      class="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      href="https://cpe-cmu-261207.github.io/lab-04-Panthonf/"
                    >
                      See More
                    </a>
                  </div>
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
            © Copyright ©2022, Panthon Kansap
          </p>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
