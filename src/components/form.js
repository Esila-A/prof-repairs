import React, { useState, useEffect, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const SubmitButton = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <button className="submit" onClick={handleReCaptchaVerify}>
      WYŚLIJ
    </button>
  );
};

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const form = useRef();
  
  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l894jei",
        "template_cnzykwe",
        form.current,
        "08HHrMqkP6n8zMnCe"
      )
      .then(() => {
        setNotice("success");
      })
      .catch(() => {
        setNotice("error");
      });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfDZGApAAAAAHChC7NqZUmxdbnPhKWXhWheiHGj">
      <div className="attempt" id="form">
        <div className="form">
          <form
            ref={form}
            id="form"
            className="form_content"
            onSubmit={handleSubmit}
          >
            <label className="requests">
              <p className="text">Imię</p>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="input-fields input-fields--one"
                required={true}
              />
            </label>
            <label className="requests">
              <p className="text">Email</p>
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="input-fields input-fields--one"
                required={true}
              />
            </label>
            <label className="requests">
              <p className="text">Wiadomość</p>
              <textarea
                name="message"
                value={inputs.message}
                onChange={handleChange}
                className="input-fields input-fields--two"
                required={true}
              />
            </label>
            {!notice ? <SubmitButton /> : ""}
            {notice === "success" ? <p className="positive">WYSŁANO!</p> : ""}
            {notice === "error" ? (
              <p className="negative">
                COŚ POSZŁO NIE TAK... SPRÓBUJ JESZCZE RAZ!
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Form;
