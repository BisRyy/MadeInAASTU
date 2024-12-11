import React from "react";
import Link from "next/link";
import Container from "@/components/Layout/container";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Spotlight } from "@/components/ui/Spotlight";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function Hero() {
	return (
		<div>
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<Container>
				<div className="flex flex-col items-center justify-center text-primary gap-5">
					<div className="z-10 flex items-center justify-center">
						<div
							className={cn(
								"group rounded-full border border-black/2 bg-neutral-100 dark:bg-neutral-500 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200"
							)}
						>
							<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out dark:text-primary hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
								<Link href="/apply" className="sm:text-md lg:text-lg">
									✨ Introducing Made In AASTU
								</Link>
								<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
							</AnimatedShinyText>
						</div>
					</div>
					<h1 className="text-5xl md:text-6xl lg:text-7xl text-center w-[90%]">
						Connecting Ideas with Opportunities
					</h1>
					<p className="text-center text-md md:text-lg lg:text-xl mt-2 dark:text-[#85868d] w-[90%] lg:w-[50%]">
						Made in AASTU helps bring student projects to life by connecting
						them with mentors, resources, and funding.
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<button className="flex gap-1 items-center btn-primary border text-xl p-5">
							<Link href="/apply">Get Involved</Link>
							<ChevronRightIcon className="h-5" />
						</button>
						<button className="flex gap-1 items-center btn-primary border text-xl p-5">
							<Link href="/donate">Donate</Link>
							<ChevronRightIcon className="h-5" />
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
}
