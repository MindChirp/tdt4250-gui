import { api } from "@/lib/axios";
import type { Tile } from "@/types/tile";

/// @ts-ignore
export const sendMouseClick = ({
  tile,
  player,
}: {
  tile: Tile;
  player: string;
}) => {
  return api.post("/api/click", {
    // TBD: Decide format of HTTP request
  });
};
