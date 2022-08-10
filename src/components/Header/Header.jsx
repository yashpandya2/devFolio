import React from "react";
import  {ReactNavbar}  from "overlay-navbar";
import logo from '../../Images/logo.gif'

const Header = () => {
  return <ReactNavbar 
  navColor1 = "#ffffff"
  navColor2 = "#000000"
  burgerColor = "red"
  logo = {logo}
  logoWidth = "650px"
  logoHoverColor = "white"
  nav2justifyContent = "space-around"
  nav3justifyContent = "space-around"
  link1Text = "Home"
  link2Text = "About"
  link3Text = "Projects"
  link4Text = "Contact"
  link1Url = "/"
  link2Url = "/about"
  link3Url = "/projects"
  link4Url = "/contact"
  link1ColorHover = "white"
  link1Color = "#d9b08c"
  // link1Size = "1.5rem"
  link1Padding = "3vmax"
  // profileIcon = {true}
  // ProfileIconElement = {FaUserAlt}
  // profileIconColor = "#d9b08c"
  // profileIconColorHover = "white"
  link1Family="Josefin Sans"
  link1Size="2vmax"
  nav1Transition="0.5"
  nav2Transition="0.6"
  nav3Transition="0.7"
  nav4Transition="0.8"
  link1AnimationTime="0.3"
  profileIconAnimationTime="0.3"
  />;
};

export default Header;
