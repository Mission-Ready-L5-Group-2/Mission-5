import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav>Create Navbar, how does this work</nav>
      <Outlet />      
      <footer style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <img src="logo.png" alt="Logo" />
          <div>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
            <a href="https://www.twitter.com">Twitter</a>
          </div>
        </div>
        <div>
          <p>Phone: 09039104642</p>
          <p>Email: info@metronz.co.nz</p>
          <p>Address: Level 33, ANZ Centre, 23-29 Albert Street, Auckland CBD 1010</p>
        </div>
        <div style={{textAlign: 'center'}}>
        © 2023 Metro NZ Property Management
        <br />
        SEO Services Provided By KWD - An SEO Auckland NZ Company
      </div>
      </footer>
    </>
  );
}

export default RootLayout;
