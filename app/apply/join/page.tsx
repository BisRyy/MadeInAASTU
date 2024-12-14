"use client";
import Script from "next/script";

export default function Apply() {
	return (
		<div className="w-full min-h-screen pb-10">
			<iframe
				data-tally-src="https://tally.so/r/31GJ5O"
				width="100%"
				height="100%"
				style={{ border: 0, margin: 0 }}
				title="Made In AASTU"
				className="min-h-screen"
			></iframe>

			<Script
				id="tally-js"
				src="https://tally.so/widgets/embed.js"
				onLoad={() => {
					// @ts-expect-error I am expecting error
					Tally?.loadEmbeds();
				}}
			/>
		</div>
	);
}
