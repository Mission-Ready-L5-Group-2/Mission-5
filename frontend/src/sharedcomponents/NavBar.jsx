import frame from "../assets/frame.svg";
import header from "../assets/header.jpeg";
import logo from "../assets/Logo.svg";
import saved from "../assets/saved.svg";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div
      style={{ backgroundImage: `url(${header})` }}
      className="w-screen h-[100px] bg-cover bg-center flex justify-between items-center lg:justify-around"
    >
        <img src={logo} alt="metroLogo"
        className="px-3"
        ></img>
        <Link className="hidden lg:block text-white hover:text-black">Home</Link>
        <Link className="hidden lg:block text-white hover:text-black">Our Services</Link>
        <Link className="hidden lg:block text-white hover:text-black">Tenants</Link>
        <Link className="hidden lg:block text-white hover:text-black">News</Link>
        <Link className="hidden lg:block text-white hover:text-black">About Us</Link>
        <Link className="hidden lg:block text-white hover:text-black">Contact Us</Link>
        <div className="flex px-3 gap-3">
           <Link to="/saved"> <img src={saved} alt="saved"></img></Link> 
           <img src={frame} alt="frame" className="lg:hidden"></img>

        </div>






    </div>
  );
}

export default NavBar;
