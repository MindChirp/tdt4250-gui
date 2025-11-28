import type { Game } from "@/types/game";
import axios from "axios";

export const getGameState = () => {
  return axios.get<Game>("/api/gamestate");
};
