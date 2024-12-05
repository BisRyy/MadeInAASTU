"use client";
import Container from "@/components/Layout/container";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  imageDark: string;
};

const MembershipData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Click Get Involved",
    desc1:
      "Start your journey by clicking the 'Get Involved' button on our homepage.",
    desc2:
      "This will guide you to the registration process and provide all the details needed to join our platform.",
    image: "/Join/howtojoin.png",
    imageDark: "/Join/howtojoin.png",
  },
  {
    id: "tabTwo",
    title: "Complete Registration",
    desc1:
      "Fill out the registration form with your personal details and interests.",
    desc2:
      "This helps us understand your goals and tailor our updates to your needs.",
    image: "/Join/getinvolved.png",
    imageDark: "/Join/getinvolved.png",
  },
  {
    id: "tabThree",
    title: "Stay Connected",
    desc1:
      "Follow us on social media and subscribe to our newsletter for updates.",
    desc2:
      "Be the first to know about new features, upcoming opportunities, and platform updates.",
    image: "/Join/stayconnected.png",
    imageDark: "/Join/stayconnected.png",
  },
];

export default function HowToJoin() {
  const [currentTab, setCurrentTab] = useState("tabOne");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTab((prevTab) => {
        const currentIndex = MembershipData.findIndex(
          (tab) => tab.id === prevTab
        );
        const nextIndex = (currentIndex + 1) % MembershipData.length;
        return MembershipData[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 text-primary">
          <h2 className="text-lg mb-2 tracking-wider">Membership Process</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-wrap p-3">
            Become a part of our thriving software engineering community by
            following these simple steps to gain access to exclusive resources
            and opportunities.{" "}
            <span className="text-primary font-bold">
              *Registration is Open to Everyone.
            </span>
          </p>
        </div>
        <div className="relative">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-wrap justify-center rounded-lg shadow-md border-gray-800 bg-zinc-600/50 md:flex-nowrap md:items-center lg:gap-8 xl:mb-24 xl:gap-12"
          >
            {MembershipData.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-gray-200 px-6 py-4 last:border-b-0 dark:border-gray-700 md:border-b-0 ${
                  currentTab === tab.id
                    ? "before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-t-sm before:bg-zinc-500"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border dark:border-gray-200 border-gray-700 bg-zinc-800">
                  <p className="text-lg font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="md:w-1/2 lg:w-auto">
                  <Button
                    variant="secondary"
                    className="text-sm bg-transparent hover:bg-transparent shadow-transparent font-medium xl:text-base"
                  >
                    {tab.title.split(" ").slice(-2).join(" ")}
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <AnimatePresence mode="wait">
              {MembershipData.map(
                (feature) =>
                  feature.id === currentTab && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MembershipItem featureTab={feature} />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

const MembershipItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <div className="flex xs:flex-row text-primary items-center gap-8 lg:gap-19">
      <div className="md:w-1/2">
        <h2 className="mb-7 text-2xl font-bold xl:text-4xl">{title}</h2>
        <p className="mb-5">{desc1}</p>
        <p className="w-11/12">{desc2}</p>
      </div>
      <div className="relative mx-auto aspect-[562/366] max-w-[750px] md:block md:w-1/2 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="dark:hidden" />
        <Image src={imageDark} alt={title} fill className="hidden dark:block" />
      </div>
    </div>
  );
};
