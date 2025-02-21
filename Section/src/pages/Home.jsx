import React from "react";
 
import HeroSection from "../components/HeroSection";
 
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import BookingSection from "../components/BookingSection";

const Home = () => {
  return (
    <div className="bg-zinc-400">
      <HeroSection />
      <BookingSection />
      <Testimonials />
       
    </div>
  );
};

export default Home;
