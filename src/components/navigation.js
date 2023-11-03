import { HashLink, NavHashLink } from "react-router-hash-link";
import logo from "../icons/logo.png"

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <dev className="navigation_logo">
        <HashLink to="/#landing" onClick={() => props.isMobilePhone && props.closeMenu()}><img src={logo} alt="logo" className="navigation_logo--logo"/></HashLink>
      </dev>
      <dev className="navigation_main-nav">
        <HashLink to="/#landing" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>GŁÓWNA</HashLink>
        <HashLink to="/#services" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>USŁUGI</HashLink>
        <HashLink to="/#about" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>O NAS</HashLink>
        <NavHashLink to="/examples/#examples" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>GALERIA</NavHashLink>
      </dev>
      <dev className="navigation_contact-nav">
        <HashLink to="/#contact" className="navigation_contact-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>KONTAKT</HashLink>
      </dev>
    </nav>
  );
};

export default Navigation;
