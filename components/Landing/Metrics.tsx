"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Layout/container";

const CounterAnimation = ({
  end,
  duration,
}: {
  end: number;
  duration: number;
}) => {
  const [count, setCount] = useState(200);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("counter-section")!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <span>{count}</span>;
};

export default function FunFact() {
  const [projectsCount, setProjectsCount] = useState(20);

  const getProjectsCount = async () => {
    const res = await fetch("/api/user/users");
    const data = await res.json();
    setProjectsCount(data.total_count);
  };

  useEffect(() => {
    getProjectsCount();
  }, []);

  return (
    <div id="metrics" className="relative z-10 mx-auto max-w-[1000px] rounded-lg py-[90px] bg-gradient-to-b from-zinc-900 to-transparent dark:bg-gradient-to-t dark:from-zinc-900 dark:to-transparent stroke-zinc-300 xl:py-[110px]">
      <Container>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate-fade-down mx-auto mb-[50px] px-4 text-center md:w-4/5 md:px-0 lg:mb-[70px] lg:w-2/3"
        >
          <h2 className="mb-4 text-3xl font-bold xl:text-[40px]">
            Empowering Future Innovators at AASTU.
          </h2>
          <p className="mx-auto lg:w-11/12">
            Driving innovation at AASTU, our platform connects students,
            projects, and opportunities to foster impactful collaborations and
            success stories.
          </p>
        </motion.div>

        <div
          id="counter-section"
          className="flex flex-wrap justify-center gap-8 lg:gap-[170px]"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate-fade-down text-center"
          >
            <h3 className="mb-2.5 text-3xl font-bold xl:text-[40px]">
              <CounterAnimation end={projectsCount} duration={5000} />+
            </h3>
            <p className="text-lg lg:text-xl">Projects per Round</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="animate-fade-down text-center"
          >
            <h3 className="mb-2.5 text-3xl font-bold xl:text-[40px]">
              <CounterAnimation end={2000} duration={2000} />+
            </h3>
            <p className="text-lg lg:text-xl">Community Members</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="animate-fade-down text-center"
          >
            <h3 className="mb-2.5 text-3xl font-bold xl:text-[40px]">
              <CounterAnimation end={15} duration={2000} />+
            </h3>
            <p className="text-lg lg:text-xl">Partnerships</p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
