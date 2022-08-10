import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          Life is unpredictable just follow the ways which are suitable to
          you...
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1503505129851-abaf7f6140b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80"
            className="aboutAvatar"
            alt="avatar"
          />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
              fontFamily: "Josefin Sans",
            }}
          >
            Yash Pandya
          </Typography>
          <Typography
            style={{
              margin: "1vmax 0",
              color: "black",
              fontFamily: "Josefin Sans",
            }}
          >
            Full Stack Developer
          </Typography>
        </div>
        <div
          style={{
            wordSpacing: "5px",
            lineHeight: "50px",
            letterSpacing: "5px",
            textAlign: "right",
          }}
        >
          A very passionate I.T. Engineer with long vision to take Information
          Technology Industry to next level !!
        </div>
      </div>
    </div>
  );
};

export default About;
