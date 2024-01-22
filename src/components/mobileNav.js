import Navigation from "./navigation";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import logo from "../icons/logo.png";
import { HeaderIsOpenContext } from "./headerOpen";

const MobileNav = () => {
  const { isOpen, setIsOpen } = useContext(HeaderIsOpenContext);

  const openIcon = (
    <FiMenu className="icon" onClick={() => setIsOpen(!isOpen)} />
  );

  const closeIcon = (
    <IoMdClose
      className="icon icon--close"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobileNavigation">
      <HashLink to="/#landing">
        <img src={logo} alt="logo" className="navigation_logo--logo" />
      </HashLink>
      {isOpen ? closeIcon : openIcon}
      {isOpen && <Navigation isMobilePhone={true} closeMenu={closeMenu} />}
    </div>
  );
};

export default MobileNav;
