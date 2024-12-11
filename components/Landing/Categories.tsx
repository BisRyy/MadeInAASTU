import Container from "@/components/Layout/container";
import { cn } from "@/lib/utils";
import {
	Code,
	Database,
	Smartphone,
	ServerCog,
	Cpu,
	Cloud,
	Layout,
	ShieldCheck,
} from "lucide-react";

export default function Categories() {
	const features = [
		{
			title: "Web Development",
			description: "Build stunning websites with great user experiences.",
			icon: <Code />,
		},
		{
			title: "Backend Development",
			description: "Create powerful systems and databases behind apps.",
			icon: <Database />,
		},
		{
			title: "Mobile Development",
			description: "Develop apps for iOS and Android devices.",
			icon: <Smartphone />,
		},
		{
			title: "DevOps",
			description: "Automate and manage infrastructure with ease.",
			icon: <ServerCog />,
		},
		{
			title: "Machine Learning",
			description: "Create AI-powered solutions to solve real-world problems.",
			icon: <Cpu />,
		},
		{
			title: "Cloud Services",
			description:
				"Host and manage your apps in the cloud for high reliability.",
			icon: <Cloud />,
		},
		{
			title: "UI/UX Design",
			description:
				"Design clean and intuitive user interfaces for a better experience.",
			icon: <Layout />,
		},
		{
			title: "Cybersecurity",
			description: "Protect your systems and data from cyber threats.",
			icon: <ShieldCheck />,
		},
	];

	return (
		<div>
			<Container>
				<div className="text-center mb-12 text-primary">
					<h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
					<p className="text-lg dark:text-muted-foreground">
						Helping the next generation of creators by supporting new ideas and
						building skills in different areas of technology.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
					{features.map((feature, index) => (
						<Feature key={feature.title} {...feature} index={index} />
					))}
				</div>
			</Container>
		</div>
	);
}

export function Feature({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
				(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
				index < 4 && "lg:border-b dark:border-neutral-800"
			)}
		>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-zinc-500 transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
}
