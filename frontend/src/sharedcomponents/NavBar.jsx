import frame from "../assets/frame.svg";
import header from "../assets/header.jpeg";
import logo from "../assets/Logo.svg";
import saved from "../assets/saved.svg";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div
      style={{ backgroundImage: `url(${header})` }}
      className="w-full h-[100px] bg-cover bg-center flex justify-between items-center"
    >
        <img src={logo} alt="metroLogo"
        className="px-3"
        ></img>
        <div className="flex px-3 gap-3">
           <Link to="/saved"> <img src={saved} alt="saved"></img></Link> 
            <img src={frame} alt="frame"></img>
        </div>






    </div>
  );
}

export default NavBar;
