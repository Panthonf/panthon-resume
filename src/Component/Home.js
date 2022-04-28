import { Link } from "react-router-dom";
import profile from "../Images/profile.png";
import imgHome from "../Images/imgHome.png"
function Home() {
  return (
    <div className="rounded w-2/4 shadow-lg mt-4 mx-auto">
      <div class="flex ">
        {/*column 1 Profile and details*/}
        <div className="w-60 max-h-max h-auto rounded bg-indigo-500 ">
          <div className="m-4 flex justify-center">
            <img src={profile} alt="profile" className=""></img>
          </div>

          <p className="font-semibold text-white text-center font-prompt text-lg">
            Panthon Kansap
          </p>
          <p className="text-black font-bold  font-prompt text-xs my-2 text-center">
            WEB DEVELOPER <h className="text-white font-normal">IN THAILAND</h>
          </p>

          <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
            <Link to="/">HOME</Link>
          </p>

          <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
            <Link to="about">ABOUT</Link>
          </p>

          <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
            <Link to="skills">SKILLS</Link>
          </p>
          <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
            <Link to="portfolio">PORTFOLIO</Link>
          </p>
          <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
            <Link to="contact">CONTACT</Link>
          </p>
          <p className="mt-8 mb-2 mx-1 text-center text-white text-xs font-prompt font-light">
            © Copyright ©2022, Panthon Kansap
          </p>
        </div>

        {/*column 2  Part and details*/}
        <div>
          <div className="flex">
            <div className="w-52 my-52 mx-12">
              <h1 className=" text-2xl font-prompt text-indigo-500">
                Hello, I’m Aef.
              </h1>
              <h1 className="font-prompt text-lg text-black">
                I am Web developer, from Thailand,
              </h1>
              <div className="mt-2 w-32 h-8 border-2 border-gray-300 bg-gray-300 rounded">
                <p className="mx-auto  my-1 max-w-max text-base font-extralight font-prompt text-indigo-500">Contact Me</p>
              </div>
            </div>
            <div className="my-auto max-h-max mr-4">
              <img src={imgHome} alt="home_1" className="h-96"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
