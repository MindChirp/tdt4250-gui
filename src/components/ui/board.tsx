import { cn } from "@/lib/utils";
import type { Tile } from "@/types/tile";
import { type ComponentProps } from "react";
import TilePiece from "./tile";
import { useGameState } from "@/hooks/useGameState";
import { useSendMove } from "@/hooks/useSendMove";

type BoardProps = {
  width: number;
  height: number;
  tiles: Tile[];
  checkered?: boolean;
} & ComponentProps<"div">;
const Board = ({ tiles, width, height, className, ...props }: BoardProps) => {
  const { data } = useGameState();
  const { mutate } = useSendMove();

  const state = data?.data;

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
          onClick={() => {
            // Notify the backend
            if (!state) {
              alert("State is not defined!");
              return;
            }

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
