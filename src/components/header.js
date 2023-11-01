import ComputerNav from "./computerNav";
import MobileNav from "./mobileNav";
import logo from "../icons/logo.png"

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header_logo" />
      <MobileNav />
      <ComputerNav />
    </div>
  );
};

export default Header;
