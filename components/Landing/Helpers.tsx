import React from "react";
import { useId } from "react";
import Container from "@/components/Layout/container";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Helpers() {
	return (
		<div id="helpers" className="text-primary">
			<Container>
				<div className="text-center">
					<h2 className="text-lg text-muted-foreground mb-2 tracking-wider">
						Support Great Ideas
					</h2>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Work With Future Leaders
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Help students turn their ideas into reality by sharing your skills,
						funding, or tools. Together, we can make a big difference.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
					{grid.map((feature) => (
						<div
							key={feature.title}
							className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
						>
							<Grid size={20} />
							<p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
								{feature.title}
							</p>
							<p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
								{feature.description}
							</p>
						</div>
					))}
				</div>
				<div className="mx-auto flex justify-center items-center mt-4">
					<button className="flex gap-1 items-center btn-primary border text-xl p-5">
						<Link href="apply/donate">Help a Startup</Link>
						<ChevronRightIcon className="h-5" />
					</button>
				</div>
			</Container>
		</div>
	);
}

const grid = [
	{
		title: "Mentorship Opportunities",
		description:
			"Guide the next generation of talent by sharing your expertise, helping them refine ideas, and fostering innovation.",
	},
	{
		title: "Investment Potential",
		description:
			"Support innovative projects with financial backing and witness the transformation of ideas into impactful solutions.",
	},
	{
		title: "Resource Contribution",
		description:
			"Provide tools, technology, or infrastructure to accelerate project development and ensure success.",
	},
	{
		title: "Network Expansion",
		description:
			"Connect with like-minded professionals, students, and industry leaders to create lasting partnerships and collaborations.",
	},
	{
		title: "Real-World Impact",
		description:
			"Be part of meaningful projects that address global challenges and drive social and economic progress.",
	},
	{
		title: "Recognition and Growth",
		description:
			"Gain visibility for your contributions and establish yourself as a leader in fostering innovation and talent development.",
	},
];

export const Grid = ({
	pattern,
	size = 20,
}: {
	pattern?: [number, number][]; // Define the expected shape of the pattern
	size?: number;
}) => {
	const defaultPattern: [number, number][] = Array.from({ length: 5 }, () => [
		Math.floor(Math.random() * 4) + 7,
		Math.floor(Math.random() * 4) + 1,
	]);

	const p = pattern ?? defaultPattern;

	return (
		<div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
			<div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
				<GridPattern
					width={size}
					height={size}
					x="-12"
					y="4"
					squares={p}
					className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
				/>
			</div>
		</div>
	);
};

export function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: {
	width: number;
	height: number;
	x: string | number; // Allow for flexibility in x and y
	y: string | number;
	squares?: [number, number][]; // Define the expected shape of the squares prop
} & React.SVGProps<SVGSVGElement>) {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern
					id={patternId}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				strokeWidth={0}
				fill={`url(#${patternId})`}
			/>
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}-${index}`} // Ensure key uniqueness
							width={width + 1}
							height={height + 1}
							x={x * width}
							y={y * height}
						/>
					))}
				</svg>
			)}
		</svg>
	);
}
