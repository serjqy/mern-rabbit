import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";
import CartDrawer from "../Layout/CartDrawer";

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <Topbar />
      <Navbar />
      <CartDrawer />
    </header>
  );
};

export default Header;
