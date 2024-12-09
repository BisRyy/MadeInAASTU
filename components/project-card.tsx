"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon, TelegramIcon } from "./icons/icons";
import {
  ArrowUpRightIcon,
} from "@heroicons/react/16/solid";

interface ProjectProps {
  description: string;
  id: string;
  image_url: string;
  title: string;
  tags: string[];
  github_repo: string;
  live_demo: string;
  telegram_channel: string;
  likes: number;
  comments: number;
}

const ProjectCard = ({
  id,
  image_url,
  description,
  title,
  tags,
  github_repo,
  live_demo,
  telegram_channel,
  likes: likes,
  comments,
}: ProjectProps) => {

  const truncateDescription = (description: string) => {
    if (description.length > 50) {
      return description.slice(0, 50) + "...";
    }
    return description;
  };

  return (
    <div className="hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-secondary hover:to-primary-200 dark:hover:bg-gradient-to-r dark:hover:from-[#24242a] dark:hover:to-[#33333b] pb-4 rounded-lg duration-200 shadow-[#33333b] shadow-md">
      <div>
        <Link href={live_demo} style={id === "4" ? {} : { pointerEvents: "none" }}>
          <Image
            className="cursor-pointer border object-cover border-gray-800 rounded-sm overflow-hidden h-40 object-cover"
            width={500}
            height={300}
            src={
              image_url
                ? image_url
                : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"
            }
            alt={title}
          />
        </Link>
        <div className="px-2 flex justify-between flex-col h-28">
          <Link
            href={live_demo}
            className="flex gap-2 pt-4 items-end text-primary" style={id === "4" ? {} : { pointerEvents: "none" }}
          >
            <h1 className="break-words truncate">{title}</h1>
            <p className="text-xs text-[#85868d] truncate">{tags.join(", ")}</p>
          </Link>
          <Link href={live_demo} style={id === "4" ? {} : { pointerEvents: "none" }}>
            <p className="text-sm text-[#85868d] py-2">
              {truncateDescription(description)}
            </p>
          </Link>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center invert dark:invert-0">
              <Link href={github_repo} target="_blank" style={id === "4" ? {} : { pointerEvents: "none" }}>
                <GithubIcon />
              </Link>
              {telegram_channel && (
                <Link href={telegram_channel} target="_blank" style={id === "4" ? {} : { pointerEvents: "none" }}>
                  <TelegramIcon />
                </Link>
              )}
              <Link href={live_demo} target="_blank" style={id === "4" ? {} : { pointerEvents: "none" }}>
                <ArrowUpRightIcon className="h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
