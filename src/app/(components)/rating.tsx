import { StarIcon } from "lucide-react";

type RatingProps = {
	rating: number;
};

export default function Rating({ rating }: RatingProps) {
	return [1, 2, 3, 4, 5].map((index) => (
		<StarIcon
			key={index}
			color={index <= rating ? "#FFC107" : "#E4E5E9"}
			className="w-4 h-4"
		/>
	));
}
