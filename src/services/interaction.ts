import { api } from "@/lib/axios";
import type { Tile } from "@/types/game";

/// @ts-ignore
export const sendMouseClick = ({
  tile,
  player,
}: {
  tile: Tile;
  player: string;
}) => {
  console.log("Sending mouse click to backend");
  return api.post("/move", {
    column: tile.column,
    row: tile.row,
    player: player,
  });
};
