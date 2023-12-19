// Import Images
import logo from "../assets/Logo.svg";
import fb from "../assets/footer/fb.svg";
import ig from "../assets/footer/ig.svg";
import li from "../assets/footer/li.svg";
import twitter from "../assets/footer/twitter.svg";

// Import Contact images
import phone from "../assets/footer/phone.svg";
import email from "../assets/footer/mail.svg";
import location from "../assets/footer/location.svg";

function Footer() {
  return (
    <>
      <div
        className="h-[200px] bg-[#1e293b] w-full
    flex  justify-around text-white items-center"
      >
        <div className="flex flex-col gap-[16px]">
          <img src={logo} alt="logo" />
          <p className="text-xs self-center">Follow Us</p>
          <div className="flex gap-3">
            <img src={fb} alt="fb" className="h-[25px] w-[25px]" />
            <img src={ig} alt="ig" className="h-[25px] w-[25px]" />
            <img src={li} alt="li" className="h-[25px] w-[25px]" />
            <img src={twitter} alt="twitter" className="h-[25px] w-[25px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-[180px]">
          <div className="flex gap-2">
            <img src={phone} alt="phone" className="h-[25px] w-[25px]" />
            <p className="text-sm">09-0391-04642</p>
          </div>
          <div className="flex gap-2">
            <img src={email} alt="email" className="h-[25px] w-[25px]" />
            <p className="text-sm">info@metronz.co.nz</p>
          </div>
          <div className="flex gap-2">
            <img src={location} alt="location" className="h-[25px] w-[25px]" />
            <p className="text-sm">
              Level 33, ANZ Centre, 23-29 Albert Street, Auckland CBD 1010
            </p>
          </div>
        </div>
      </div>
      <div className="h-[64px] bg-[#475569] text-white text-center px-[28px] py-[16px] flex flex-col gap-[8px] text-xs">
        <p>&copy; Metro NZ Property Management</p>
        <p>SEO Services Provided By KWD - An SEO Auckland NZ Company</p>
      </div>
    </>
  );
}

export default Footer;
