import { useContext } from "react";
import { HeaderIsOpenContext } from "./headerOpen";
import ComputerNav from "./computerNav";
import MobileNav from "./mobileNav";

const Header = () => {
  const { isOpen } = useContext(HeaderIsOpenContext);

  return (
    <div className={`header ${isOpen ? "open" : "closed"}`}>
      <MobileNav />
      <ComputerNav />
    </div>
  );
};

export default Header;
