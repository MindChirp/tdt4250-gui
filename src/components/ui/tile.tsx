import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type TileProps = {
  color: string; // Hex color string
  tileScale: number;
  onClick: () => void;
} & ComponentProps<"div">;
const Tile = ({ color, tileScale, className, ...props }: TileProps) => {
  return (
    <div
      className={cn(
        "p-2 aspect-square flex items-center justify-center border border-border rounded-lg",
        className
      )}
      style={{
        height: tileScale * 25,
        width: tileScale * 25,
        backgroundColor: color,
      }}
      {...props}
    >
      {/* <span>{label}</span> */}
    </div>
  );
};

export default Tile;
