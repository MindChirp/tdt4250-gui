import { useSendMove } from "@/hooks/useSendMove";
import { cn } from "@/lib/utils";
import type { Tile } from "@/types/tile";
import { type ComponentProps } from "react";
import TilePiece from "./tile";
import type { Game } from "@/types/game";

type BoardProps = {
  width: number;
  height: number;
  tiles: Tile[];
  state: Game;
  checkered?: boolean;
} & ComponentProps<"div">;
const Board = ({
  state,
  tiles,
  width,
  height,
  className,
  ...props
}: BoardProps) => {
  const { mutate } = useSendMove();

  return (
    <div
      className={cn(
        "w-fit h-fit border border-card rounded-md grid overflow-hidden bg-background shadow-sm",
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
          onClick={() => {
            // Notify the backend

            mutate({ tile, player: state?.currentPlayer.name });
          }}
          color={tile.darker ? "#999999" : tile.color}
          key={`${index} + ${tile.col} + ${tile.row}`}
        />
      ))}
    </div>
  );
};

export default Board;
