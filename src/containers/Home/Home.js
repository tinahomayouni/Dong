import React from "react";
import Slider from "../../components/slider/slider";
import About from "../About/About";
import Header from "../Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <About />
    </>
  );
}
