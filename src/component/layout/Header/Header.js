import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/icon.png"

const options = {
  burgerColorHover: "#eb4036",
   logo,
  logoWidth: "20vmax",
  navColor1: "#C2B4B4",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  
  link1Text: "Login",
  link2Text: "Register",
  link3Text: "Admin",
  link4Text: "Logout",
  link1Url: "/login",
  link2Url: "/register",
  link3Url: "/admin",
  link4Url: "/logout",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;