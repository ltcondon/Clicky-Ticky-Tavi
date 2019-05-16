import React from "react";
import "./style.css";
import logo from "./Cuttingboard-final2.png"

function Title(props) {
  return (
  <div className="logo-wrapper">
    {/* <h1 className="title">{props.children}</h1>; */}
    <img className="logo" src={logo} alt="board"></img>
  </div>
  );
}

export default Title;
