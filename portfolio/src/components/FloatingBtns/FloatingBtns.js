import React from "react";
import './FloatingBtns.css'
import { FaLinkedinIn, FaBehance, FaEnvelope } from "react-icons/fa";

const FloatingBtns = () => {
  return (
    <div className="floating-btns">
      <ul>
        <li><a href="https://www.linkedin.com/in/juliaromanibarreta/" target="_blank" rel="noreferrer"><FaLinkedinIn size={40} color="white"/></a></li>
        <li><a href="https://www.behance.net/juliaromanibarreta" target="_blank" rel="noreferrer"><FaBehance size={40} color="white"/></a></li>
        <li><a href="mailto:juliaromanibarreta@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope size={40} color="white"/></a></li>
      </ul>
    </div>
  );
};
export default FloatingBtns;