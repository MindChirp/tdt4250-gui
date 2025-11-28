import axios from "axios";

export const getGameState = () => {
  return axios.get("/api/gamestate");
};
