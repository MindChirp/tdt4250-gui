import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type TileProps = {
  color: string; // Hex color string
} & ComponentProps<"div">;
const Tile = ({ color, className, ...props }: TileProps) => {
  return (
    <div
      className={cn(
        "p-2 aspect-square h-10 flex items-center justify-center",
        className
      )}
      style={{
        backgroundColor: color,
      }}
      {...props}
    >
      <span>H</span>
    </div>
  );
};

export default Tile;
