import { cn } from "@/lib/utils";
import type { Tile } from "@/types/tile";
import { type ComponentProps } from "react";
import TilePiece from "./tile";

type BoardProps = {
  width: number;
  height: number;
  tiles: Tile[];
  checkered?: boolean;
} & ComponentProps<"div">;
const Board = ({ tiles, width, height, className, ...props }: BoardProps) => {
  return (
    <div
      className={cn(
        "w-fit h-fit border border-border rounded-md grid overflow-hidden",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${width}, 1fr )`,
        gridTemplateRows: `repeat(${height}, 1fr )`,
      }}
      {...props}
    >
      {tiles.map((tile, index) => (
        <TilePiece
          color={tile.darker ? "#999999" : tile.color}
          key={`${index} + ${tile.col} + ${tile.row}`}
        />
      ))}
    </div>
  );
};

export default Board;
