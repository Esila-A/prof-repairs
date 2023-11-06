import Phone from "../icons/phone.png";
import Email from "../icons/email.png";
import Insta from "../icons/insta.png";

import Form from "./form";

const DashboardContact = () => {

  return (
    <div className="contact" id="contact">
      <h2 className="contact_heading">KONTAKT</h2>
      <div className="contact_information">
        <div className="alignment">
          <p className="contact_information--name">DANE FIRMY</p>
          <p className="contact_information--nip">
            NIP: 1231367988<br/>
            REGON: 523859513
          </p>
          <div className="wrap">
            <div className="contact_information--details">
            <img src={Phone} alt="phone-icon" className="icon"/>
              <div className="phone-numbers">
                <a href="tel:+48784078686" className="phone-numbers_number">+48 784 078 686</a><span className="phone-numbers_number span">&nbsp; | &nbsp;</span>  
                <a href="tel:+48666861106" className="phone-numbers_number">+48 666 861 106</a>
              </div>
            </div>
            <div className="contact_information--details">
              <img src={Email} alt="email-icon" className="icon"/>
              <p className="contact_information--paragraph">
                profrepairs@gmail.com
              </p>
            </div>
            <div className="contact_information--details">
            <img src={Insta} alt="instagram-icon" className="icon"/>
              <a
                href="https://www.instagram.com/prof_repairs/"
                className="contact_information--link insta-link"
                target="_blank"
                rel="noreferrer"
              >
                @prof_repairs
              </a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default DashboardContact;
