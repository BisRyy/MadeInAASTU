"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CTA from "@/components/Landing/CTA";
import Hero from "@/components/Landing/Hero";
import Faqs from "@/components/Landing/Faqs";
import Metrics from "@/components/Landing/Metrics";
import React from "react";
import Projects from "@/components/Landing/Project";
import Categories from "@/components/Landing/Categories";
import Benefits from "@/components/Landing/Benefits";
import Partners from "@/components/Landing/Partners";
import HowToJoin from "@/components/Landing/HowToJoin";
import Helpers from "@/components/Landing/Helpers";

export default function Home() {
  return (
    <div className="flex flex-col space-y-36">
      <Header />
      <Hero />
      <Partners />
      <Benefits />
      <Helpers />
      <Metrics />
      <HowToJoin />
      <Projects />
      <Categories />
      <CTA />
      <Faqs />
      <Footer />
    </div>
  );
}
