import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const contactInfoItems = [
    { icon: faEnvelope, text: "Contact me on", link: "ruchitaoza9@gmail.com" },
    { icon: faGlobeEurope, text: "Website", link: "www.ruchita-oza.com" },
    { icon: faGithub, text: "Github", link: "https://github.com/ruchita-oza" },
    {
      icon: faLinkedin,
      text: "Linkedin",
      link: "https://www.linkedin.com/in/ruchita-oza-5863181b6/",
    },
  ];

  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
    subject: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_i185qin", "template_9x34bqu", toSend, "EWumzOGPCfEuqBipU")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact me</h2>
          </div>
        </div>
        <h3 className="contact-title">Have you any Questions?</h3>
        <h4 className="contact-sub-title">I'M AT YOUR SERVICE</h4>
        <div className="row">
          {/* <!-- contact info item start --> */}
          {contactInfoItems &&
            contactInfoItems.map((contactInfoItem, index) => (
              <div className="contact-info-item" key={index}>
                <div className="icon">
                  <FontAwesomeIcon
                    className="fa padd-15"
                    icon={contactInfoItem.icon}
                  ></FontAwesomeIcon>
                  <h4>{contactInfoItem.text}</h4>
                  <p>{contactInfoItem.link}</p>
                </div>
              </div>
            ))}
          {/* <!-- contact info item ends --> */}
        </div>

        <h3 className="contact-title">Send Me A Email</h3>
        <h4 className="contact-sub-title">I'M VERY RESPONSIVE TO MAILS</h4>
        {/* <!-- contact form start--> */}

        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="from_name"
                      value={toSend.from_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="from_email"
                      value={toSend.from_email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={toSend.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id=""
                      name="message"
                      placeholder="Your message"
                      value={toSend.message}
                      onChange={handleChange}
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item submit-btn col-12 padd-15 ">
                  <button className="btn" type="submit">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <!-- contact form ends --> */}
      </div>
    </section>
  );
}

export default Contact;
