import React from "react";
import {
  Hero,
  Slider,
  GameCards,
  Model,
  UserFeedBack,
  GetStart,
  Footer,
} from "./constants/index";
import AdminLayout from "../../Components/NavBar";

const HomePage = () => {
  return (
    <>
    <AdminLayout/>
    <div className="flex flex-col">
      <Hero />
      <Slider />
      <GameCards />
      <Model />
      <UserFeedBack />
      <GetStart />
      <Footer />
    </div>
    </>
  );
};

export default HomePage;
