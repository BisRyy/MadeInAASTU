"use client";
import React from "react";
import Container from "@/components/Layout/container";
import { LightBulbIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import ToggleTheme from "@/components/Layout/theme-toggle";

const Header = () => {
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
          <div className="flex items-center gap-5">
            <Link href="/apply" className="hidden md:block">
              <button className="btn-primary border">Post Your Project</button>
            </Link>
            <ToggleTheme />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
