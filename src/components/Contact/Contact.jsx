import { Typography } from "@mui/material";
import React from "react";
// import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <div className="head">
          <Typography variant="h4" style={{ fontFamily: "Josefin Sans" }}>
            Contact Us
          </Typography>
          <div>
            <iframe
              title="location"
              className="media"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.933929664609!2d72.76156901539512!3d21.155027488830555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8464ee06c9%3A0x97e1bb58327549a6!2sSwastik%20Universal%20Building!5e0!3m2!1sen!2sin!4v1660024166893!5m2!1sen!2sin"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
