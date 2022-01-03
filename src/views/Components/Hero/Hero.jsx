import React from "react";
import banner from "../../../images/banner.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__banner">
        <img src={banner} alt="" />
        <h1 className="heading__primary my-4">Your Home Service Partner</h1>
        <p className="heading__sub">
          get your needed home service on-demand easily
        </p>
      </div>
    </section>
  );
};

export default Hero;
