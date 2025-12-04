import { api } from "@/lib/axios";
import type { Game } from "@/types/game";

export const getGameState = () => {
  return api.get<Game>("/game-state");
};
