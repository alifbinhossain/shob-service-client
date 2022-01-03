import React from "react";
import Hero from "../views/Components/Hero/Hero";
import HeroServices from "../views/Components/Hero/HeroServices";
import Header from "../views/Layouts/Header/Header";

const Home = () => {
  return (
    <section>
      <Header></Header>
      <Hero></Hero>
      <HeroServices></HeroServices>
    </section>
  );
};

export default Home;
