import { Card } from "./Card";
import type { ResturantType } from "../types";
export async function Grid({ restaurants }: { restaurants: ResturantType[] }) {
	return (
		<div className="w-full px-6 sm:pr-4 sm:pl-0 2xl:pr-0 pb-6 md:pb-0">
			<h1 className="text-h1sm md:text-display leading-[20px] md:leading-[40px] mb-6">
				Restaurant’s
			</h1>
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-3"
				// className="flex flex-wrap gap-4 min-h-[calc(202px*3+1rem)]"
			>
				{restaurants.map((item: any) => (
					<Card {...item} key={item.id} />
				))}
			</div>
		</div>
	);
}