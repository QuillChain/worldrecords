import React from "react";
import MainVideo from "../../assets/web3.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop id="video1">
        <source src={MainVideo} />
      </video>
      <div className="hero-text">
        <h1>1st Guinness World Records Book</h1>
        <h1>
          in <span className="blue"> Blockchain </span> 
        </h1>
        {/* <div className="btn-group">
          <button className="btn">Discovery</button>
          <button className="btn">FAQ</button>
        </div> */}
      </div>
      <div className="bottom-text">
        <h2>
        Total World Records: <span className="blue"> 78.565</span>  Records
         </h2>
      </div>
    </div>
  );
};

export default Hero;
