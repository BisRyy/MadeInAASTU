import Link from "next/link";
import { icons } from "lucide-react";
import Container from "../Layout/container";
import { Icon } from "@/components/ui/icon";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BenefitsProps {
	icon: string;
	title: string;
	description: string;
}

const benefitList: BenefitsProps[] = [
	{
		icon: "Users",
		title: "Collaborative Community",
		description:
			"Join a vibrant community of innovators, mentors, and investors, fostering meaningful collaborations.",
	},
	{
		icon: "Star",
		title: "Recognition & Awards",
		description:
			"Gain visibility and recognition for your projects with awards and acknowledgments.",
	},
	{
		icon: "Briefcase",
		title: "Funding Opportunities",
		description:
			"Connect with investors and secure funding to bring your ideas to life.",
	},
	{
		icon: "Book",
		title: "Learning Resources",
		description:
			"Access a wealth of resources to develop your skills and knowledge in innovation and entrepreneurship.",
	},
	{
		icon: "Globe",
		title: "Global Reach",
		description:
			"Expand your impact by showcasing your projects to a worldwide audience of investors and supporters.",
	},
	{
		icon: "Rocket",
		title: "Accelerated Growth",
		description:
			"Fast-track your project's success with mentorship, networking, and essential tools.",
	},
];

export default function Benefits() {
	return (
		<section
			id="benefits"
			className="flex justify-center items-center lg:gap-24 text-primary"
		>
			<Container>
				<div className="text-center">
					<h2 className="text-lg text-muted-foreground mb-2 tracking-wider">
						Build Your Future
					</h2>

					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Turn Your Ideas Into Action
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Connect with others, work on exciting projects, and get the support
						you need to make your ideas happen.
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-4 w-full col-span-2">
					{benefitList.map(({ icon, title, description }, index) => (
						<Card
							key={title}
							className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
						>
							<CardHeader>
								<div className="flex justify-between">
									<Icon
										name={icon as keyof typeof icons}
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

							<CardContent className="text-primary">{description}</CardContent>
						</Card>
					))}
				</div>
				<div className="mx-auto flex justify-center items-center mt-4">
					<button className="flex gap-1 items-center btn-primary border text-xl p-5">
						<Link href="/apply/join">Showcase Your Project</Link>
						<ChevronRightIcon className="h-5" />
					</button>
				</div>
			</Container>
		</section>
	);
}
