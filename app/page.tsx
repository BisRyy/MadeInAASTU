"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CTA from "@/components/Landing/CTA";
import Hero from "@/components/Landing/Hero";
import Faqs from "@/components/Landing/Faqs";
import BulbLoading from "@/components/BulbLoading";
import Metrics from "@/components/Landing/Metrics";
import React, { useEffect, useState } from "react";
import Categories from "@/components/Landing/Categories";
import Benefits from "@/components/Landing/Benefits";
import Partners from "@/components/Landing/Partners";
import HowToJoin from "@/components/Landing/HowToJoin";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  if (isLoading) {
    return <BulbLoading />;
  }

  return (
    <div className="flex flex-col space-y-36">
      <Header />
      <Hero />
      <Partners />
      <Benefits />
      <Metrics />
      <HowToJoin />
      <Categories />
      <CTA />
      <Faqs />
      <Footer />
    </div>
  );
}
