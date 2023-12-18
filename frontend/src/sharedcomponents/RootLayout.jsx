import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav>Create Navbar, how does this work</nav>
      <Outlet />
      <footer>Create Footer, no sir!</footer>
    </>
  );
}

export default RootLayout;
