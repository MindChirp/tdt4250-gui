import { useSendMove } from "@/hooks/useSendMove";
import { cn } from "@/lib/utils";
import type { Game } from "@/types/game";
import { type ComponentProps } from "react";
import TilePiece from "./tile";

type BoardProps = {
  state: Game;
} & ComponentProps<"div">;
const Board = ({ state, className, ...props }: BoardProps) => {
  const { mutate } = useSendMove();

  return (
    <div
      className={cn(
        "w-fit h-fit border border-card rounded-lg grid overflow-hidden bg-background shadow-sm",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${state.boardWidth}, 1fr )`,
        gridTemplateRows: `repeat(${state.boardHeight}, 1fr )`,
      }}
      {...props}
    >
      {state.tiles.map((tile, index) => (
        <TilePiece
          isLegal={
            !!state.legalMoves.find(
              (m) => m.column === tile.column && m.row === tile.row
            )
          }
          tileScale={
            state.boardHeight >= state.boardWidth
              ? 15 / state.boardHeight
              : 15 / state.boardHeight
          }
          onClick={() => {
            // Notify the backend
            mutate({ tile, player: state.activePlayer });
          }}
          color={tile.currentStateColor ?? tile.defaultHexColor}
          key={`${index} + ${tile.column} + ${tile.row}`}
        />
      ))}
    </div>
  );
};

export default Board;
