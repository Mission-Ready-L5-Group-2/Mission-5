import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav>Create Navbar</nav>
      <Outlet />
      <footer>Create Footer</footer>
    </>
  );
}

export default RootLayout;
