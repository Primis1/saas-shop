import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className: string;
};

const clothingCategories = ["Outerwear", "Tops", "Bottoms", "Dresses", "Activewear", "Footwear", "Accessories"];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeIndex = 0;
  return (
    <div
      className={cn(" inline-flex gap-2 bg-gray-50 p-1 rounded-md", className)}
    >
      {clothingCategories.map((item, i) => (
        <Link
          key={item}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href=""
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
