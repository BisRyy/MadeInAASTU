import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Container from "@/components/Layout/container";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Briefcase, UserPlus, HeartHandshake } from "lucide-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hero() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setIsPopupOpen(false);
		}
	};

	const cards = [
		{
			title: "Showcase Your Project",
			description:
				"Submit your project and get the resources you need to bring it to life.",
			icon: Briefcase,
			href: "/apply/project",
		},
		{
			title: "Join a Project",
			description:
				"Be part of an existing project or startup and contribute to its success.",
			icon: UserPlus,
			href: "/apply/join",
		},
		{
			title: "Support as a Partner",
			description:
				"Help students by providing funding, mentorship, or other resources.",
			icon: HeartHandshake,
			href: "/apply/donate",
		},
	];

	return (
		<div id="hero">
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
								<Link href="#benefits" className="sm:text-md lg:text-lg">
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
						<button
							className="flex gap-1 items-center btn-primary border text-xl p-5"
							onClick={() => setIsPopupOpen(true)}
						>
							Get Involved
							<ChevronRightIcon className="h-5" />
						</button>
					</div>
				</div>
				{isPopupOpen && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
						onClick={handleOutsideClick}
					>
						<div className="grid grid-cols-1 md:grid-cols-3 w-[78%] gap-6">
							{cards.map(({ title, description, icon: Icon, href }, index) => (
								<Link key={title} href={href} className="hover:no-underline">
									<Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
										<CardHeader>
											<div className="flex justify-between">
												<Icon
													size={32}
													color="hsl(var(--primary))"
													className="mb-6 text-primary"
												/>
												<span className="text-5xl text-primary/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/50">
													0{index + 1}
												</span>
											</div>
											<CardTitle>{title}</CardTitle>
										</CardHeader>
										<CardContent className="text-primary">
											{description}
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
					</div>
				)}
			</Container>
		</div>
	);
}
