"use client";
import Container from "@/components/Layout/container";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";
import { TelegramIcon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function WorldMapDemo() {
  return (
    <div className="py-4 w-full">
      <Container>
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Ready To Stay{" "}
            <span className="text-neutral-400">
              {"Connected".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 mx-auto py-4">
            Connect your projects with the world. Whether you{"'"}re a student
            seeking opportunities or a professional looking for talent, our
            platform bridges the gap, helping you expand your reach and find the
            right partners or investors.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 18.6139, lng: 90.209 }, // New Delhi, India
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 55.1332, lng: 100.9113 }, // Vladivostok, Russia
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 38.7223, lng: 5.1393 }, // Paris, France
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: -40.8688, lng: 130.2093 }, // Sydney, Australia
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 25.6895, lng: 105.6917 }, // Beijing, China
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: -30.7975, lng: -47.8919 }, // Brasília, Brazil
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 47.5074, lng: -3.1278 }, // London, UK
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 30.7128, lng: -100.006 }, // New York City, USA
            },
            {
              start: { lat: -9.2921, lng: 36.8219 }, // Addis Ababa, Ethiopia
              end: { lat: 60.7128, lng: -120.006 }, // New York City, USA
            },
          ]}
        />
        <div className="flex justify-center items-center space-y-4">
          <Button asChild>
            <a href="https://t.me/AASTUSEA" target="_blank">
              <TelegramIcon className="mr-2" width={24} height={24} />
              Join Our Community
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
}
