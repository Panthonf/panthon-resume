import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import email from "../Images/email.png";
import React from "react";
import Helmet from "react-helmet";

function Contact() {
  return (
    <div className="w-auto rounded shadow-md h-auto">
      <Helmet>
        <title>Contact Me | Panthon Kansap</title>
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
              <div className="container font-prompt grid justify-center w-50 border-2 border-indigo-300 rounded-md mt-4">
                <div className="m-2 text-center text-xl font-semibold font-prompt text-indigo-500">
                  <h1>Contact Me</h1>
                </div>
                <form
                  target="_blank"
                  action="https://formsubmit.co/panthon.f@gmail.com"
                  method="POST"
                >
                  <div class="form-group">
                    <div class="form-row">
                      <div class="col">
                        <input
                          type="text"
                          name="name"
                          className="border-2 border-indigo-100 rounded-md p-2"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div class="col mt-2">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          className="border-2 border-indigo-100 rounded-md p-2"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-2">
                    <textarea
                      placeholder="Your Message"
                      className="form-control border-2 border-indigo-100 rounded-md p-2 w-full"
                      name="message"
                      rows="9"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center mb-4 mt-2">
                    <button
                      type="submit"
                      class="btn btn-lg btn-dark btn-block border-2 px-2 bg-indigo-400 hover:bg-indigo-600 border-indigo-100 rounded-md"
                    >
                      Submit Form
                    </button>
                  </div>
                </form>
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
export default Contact;
