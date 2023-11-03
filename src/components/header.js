import ComputerNav from "./computerNav";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <div className="header">
      <MobileNav />
      <ComputerNav />
    </div>
  );
};

export default Header;
