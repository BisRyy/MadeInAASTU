"use client";
import React from "react";
import Container from "../Layout/container";
import { LinkPreview } from "@/components/ui/link-preview";

const partners = [
  { id: "1", name: "GITHUB", url: "https://github.com" },
  { id: "2", name: "MICROSOFT", url: "https://microsoft.com" },
  { id: "3", name: "NOTION", url: "https://notion.so" },
  { id: "4", name: "AASTU", url: "https://aastu.software" },
];

export default function Partners() {
  return (
    <div id="partners" className="py-16 text-primary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-lg dark:text-muted-foreground">
            We{"'"}re proud to collaborate with these industry leaders.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
          {partners.map((partner) => (
            <LinkPreview
              url={partner.url}
              key={partner.id}
              className="font-merriweather dark:text-white text-2xl md:text-3xl font-bold text-center"
            >
              {partner.name}
            </LinkPreview>
          ))}
        </div>
      </Container>
    </div>
  );
}
