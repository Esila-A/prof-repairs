import { HashLink, NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <HashLink to="/#landing" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>GŁÓWNA</HashLink>
      <HashLink to="/#services" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>USŁUGI</HashLink>
      <HashLink to="/#about" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>O NAS</HashLink>
      <NavHashLink to="/examples/#examples" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>GALERIA</NavHashLink>
      <HashLink to="/#contact" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>KONTAKT</HashLink>
    </nav>
  );
};

export default Navigation;
