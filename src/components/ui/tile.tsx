import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type TileProps = {
  color: string; // Hex color string
  tileScale: number;
  isLegal?: boolean;
  onClick: () => void;
} & ComponentProps<"div">;
const Tile = ({
  color,
  isLegal,
  tileScale,
  className,
  ...props
}: TileProps) => {
  return (
    <div
      className={cn(
        "relative p-2 aspect-square flex items-center justify-center border border-border rounded-lg",
        className
      )}
      style={{
        height: tileScale * 25,
        width: tileScale * 25,
        backgroundColor: color,
      }}
      {...props}
    >
      {isLegal && (
        <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-green-300 rounded-full size-1/2" />
      )}
      {/* <span>{label}</span> */}
    </div>
  );
};

export default Tile;
