import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-10">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
