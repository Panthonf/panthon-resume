import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import imgHome from "../Images/imgHome.png";

window.onload = function () {
  let navBarToggle = document.getElementById("js-nav-toggle");
  navBarToggle.addEventListener("click", NavbarShow);
  navBarToggle.addEventListener("click", function () {
    if (navBarToggle.style.color !== "white") {
      navBarToggle.style.color = "white";
    } else {
      navBarToggle.style.color = "black";
    }
  });
};

function NavbarShow() {
  var mainNav = document.getElementById("js-menu");
  if (mainNav.style.display === "none") {
    mainNav.style.display = "flex";
  } else {
    mainNav.style.display = "none";
  }
}

function Home() {
  return (
    <div className="w-auto rounded shadow-md h-auto">
      <div className="w-50 h-auto rounded shadow-lg bottom-2 bg-indigo-500">
        <div className="flex justify-between">
          <div className="m-2">
            <img src={profile} alt="profile" className="h-12 w-auto"></img>
          </div>
          <div>
            <div className="mt-4">
              <span
                className="nav-toggle text-2xl mx-8 text-gray-50"
                id="js-nav-toggle"
              >
                <i className="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between" id="js-menu">
        <div>
          <p className="my-2 ml-2 text-center text-black text-xs font-prompt font-bold hover:text-black underline underline-offset-8 decoration-indigo-500">
            <Link to="/">HOME</Link>
          </p>
        </div>
        <div>
          <p className="my-2 ml-2 text-center text-black text-xs font-prompt font-bold hover:text-black">
            <Link to="about">ABOUT</Link>
          </p>
        </div>
        <div>
          <p className="my-2 ml-2 text-center text-black text-xs font-prompt font-bold hover:text-black ">
            <Link to="skills">SKILLS</Link>
          </p>
        </div>
        <div>
          <p className="my-2 ml-2 text-center text-black text-xs font-prompt font-bold hover:text-black ">
            <Link to="portfolio">PORTFOLIO</Link>
          </p>
        </div>
        <div>
          <p className="my-2 ml-2 mr-2 text-center text-black text-xs font-prompt font-bold hover:text-black ">
            <Link to="contact">CONTACT</Link>
          </p>
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
