import { Link } from "react-router-dom"
import profile from "../Images/profile.png"
function Skills(){
    return(
        <div className="max-w-sm rounded shadow-lg mt-4 mx-auto">
        <div class="flex">
          {/*column 1 Profile and details*/}
          <div className="rounded bg-indigo-500 ">
            <img src={profile} alt="profile" className="m-8 w-52"></img>
            <p className="font-semibold text-white text-center font-prompt text-lg">
              Panthon Kansap
            </p>
            <p className="text-black font-bold  font-prompt text-xs my-2 text-center">
              WEB DEVELOPER{" "}
              <h className="text-white font-normal">IN THAILAND</h>
            </p>

            <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
              <Link to="/">HOME</Link>
            </p>

            <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
              <Link to="../about">ABOUT</Link>
            </p>

            <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
              <Link to="../skills">SKILLS</Link>
            </p>
            <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
              <Link to="../portfolio">PORTFOLIO</Link>
            </p>
            <p className="mt-8 text-center text-white text-xs font-prompt font-bold">
              <Link to="../contact">CONTACT</Link>
            </p>
            <p className="mt-8 mb-4 text-center text-white text-xs font-prompt font-light">
              © Copyright ©2022, Panthon Kansap
            </p>
          </div>

          {/*column 2  Part and details*/}
          <div>
            Skills
          </div>
        </div>
      </div>
    )
}
export default Skills