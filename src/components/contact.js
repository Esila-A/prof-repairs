import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

import Form from "./form";

const DashboardContact = () => {
  const phoneIcon = <FaPhoneAlt className="icon" />;
  const mailIcon = <IoMdMail className="icon" />;
  const facebookIcon = <FaFacebook className="icon" />;
  const mapIcon = <RiMapPin2Fill className="icon" />;

  return (
    <div className="contact" id="contact">
      <h2 className="contact_heading">KONTAKT</h2>
      <div className="contact_information">
        <div>
          <p className="contact_information--name">DANE FIRMY</p>
          <p className="contact_information--nip">
            NIP: 1182237322<br/>
            REGON: 521346330
          </p>
          <div className="contact_information--details">
            {phoneIcon}
            <p className="contact_information--paragraph">+48 784 078 686<br/> +48 666 861 106</p>
          </div>
          <div className="contact_information--details">
            {mailIcon}
            <p className="contact_information--paragraph">
              profrepairsp@gmail.com
            </p>
          </div>
          <div className="contact_information--details">
            {facebookIcon}
            <a
              href="https://www.instagram.com/prof_repairs/"
              className="contact_information--link"
              target="_blank"
              rel="noreferrer"
            >
              @prof_repairs
            </a>
          </div>
          <div className="contact_information--details">
            {mapIcon}
            <p className="contact_information--paragraph">
              ul. Tadeusza Gajcego 7/156,
              <br />
              01-944 Warszawa
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default DashboardContact;
