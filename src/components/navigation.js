import { NavHashLink } from "react-router-hash-link";
import logo from "../icons/logo.png"

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <dev className="navigation_logo">
        <NavHashLink to="/#landing"><img src={logo} alt="logo" className="navigation_logo--logo"/></NavHashLink>
      </dev>
      <dev className="navigation_main-nav">
        <NavHashLink to="/#landing" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>GŁÓWNA</NavHashLink>
        <NavHashLink to="/#about" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>O NAS</NavHashLink>
        <NavHashLink to="/services/#services" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>USŁUGI</NavHashLink>
        <NavHashLink to="/gallery/#gallery" className="navigation_main-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>GALERIA</NavHashLink>
      </dev>
      <dev className="navigation_contact-nav">
        <NavHashLink to="/contact/#contact" className="navigation_contact-nav--link" onClick={() => props.isMobilePhone && props.closeMenu()}>KONTAKT</NavHashLink>
      </dev>
    </nav>
  );
};

export default Navigation;
