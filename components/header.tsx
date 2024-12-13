"use client";
import React from "react";
import Container from "@/components/Layout/container";
import { LightBulbIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import ToggleTheme from "@/components/Layout/theme-toggle";
import { useState } from "react";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const resources = [
    {name: "Build a Startup", link: "/apply/project"},
    {name: "Join a Startup", link: "/apply/join"},
    {name: "Help a Startup", link: "/apply/donate"},
  ];

  return (
    <div className="sticky top-0 z-50 md:py-4 py-5 backdrop-filter backdrop-blur-lg">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <LightBulbIcon className="md:h-6 h-8 text-custom-500 dark:text-custom-50" />
            <h1 className="text-xl md:text-2xl font-bold text-foreground dark:text-custom-50">
              Made In AASTU
            </h1>
          </Link>
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-5 hidden md:block">
            <Link className="text-foreground dark:text-custom-50 cursor-pointer hover:underline pr-12" href="https://aastu.software" rel="noopener noreferrer" target="_blank">
              Join AASTUSEA
            </Link>
          </div>
          <div
            className="relative hidden md:block"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span className="text-foreground dark:text-custom-50 cursor-pointer hover:underline pr-12">Get Involved </span>
            {isHovering && (
              <div className="absolute top-full w-36 left-4 mt-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
                <ul className="w-36 whitespace-nowrap">
                  {resources.map((resource, index) => (
                    <li key={resource.name}  className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-black dark:text-white">
                      <a className="text-black dark:text-white" href={resource.link} target="_blank" rel="noopener noreferrer">
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/apply/project" className="hidden md:block">
              <button className="btn-primary border">
                Submit Your Project
              </button>
            </Link>
            <ToggleTheme />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
