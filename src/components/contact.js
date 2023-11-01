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
      <h2 className="contact_heading">MASZ PYTANIA? DZWOŃ I PISZ!</h2>
      <div className="contact_information">
        <div>
          <p className="contact_information--name">Firma Serlo</p>
          <p className="contact_information--nip">
            NIP: 1182237322 , REGON: 521346330
          </p>
          <div className="contact_information--details">
            {phoneIcon}
            <p className="contact_information--paragraph">+48 729 520 949</p>
          </div>
          <div className="contact_information--details">
            {mailIcon}
            <p className="contact_information--paragraph">
              kontakt.serlo@gmail.com
            </p>
          </div>
          <div className="contact_information--details">
            {facebookIcon}
            <a
              href="https://www.facebook.com/profile.php?id=100079474383115"
              className="contact_information--link"
              target="_blank"
              rel="noreferrer"
            >
              KLIKNIJ
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
