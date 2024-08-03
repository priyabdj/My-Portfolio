import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ad7553a1-1738-460d-bb7f-f6327780e46a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };

  return (
    <div id="contact" className="Contact">
      <div className="Contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-datail">
              <img src={mail_icon} alt="" />
              <p>bhardwajpriya402@gmail.com</p>
            </div>
            <div className="contact-datail">
              <img src={call_icon} alt="" />
              <p>+91 7303105119</p>
            </div>
            <div className="contact-datail">
              <img src={location_icon} alt="" />
              <p>Faridabad,Haryana</p>
            </div>
          </div>
        </div>

        <form onSubmit ={onSubmit}action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
