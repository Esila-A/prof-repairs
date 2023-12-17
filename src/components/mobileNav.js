import Navigation from "./navigation";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { HashLink} from "react-router-hash-link";
import logo from "../icons/logo.png"


const MobileNav = () => {
  const [icon, setIcon] = useState(false);

  const openIcon = <FiMenu className="icon" onClick={() => setIcon(!icon)} />;

  const closeIcon = (
    <IoMdClose className="icon icon--close" onClick={() => setIcon(!icon)} />
  );

  const closeMenu = () => setIcon(false);

  return (
    <div className="mobileNavigation">
      <HashLink to="/#landing"><img src={logo} alt="logo" className="navigation_logo--logo"/></HashLink>
      {icon ? closeIcon : openIcon}
      {icon && <Navigation isMobilePhone={true} closeMenu={closeMenu} />}
    </div>
  );
};

export default MobileNav;
