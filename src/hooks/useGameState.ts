import { getGameState } from "@/services/gameState";
import { useQuery } from "@tanstack/react-query";

export const useGameState = () => {
  return useQuery({
    queryFn: getGameState,
    queryKey: ["gamestate"],
    staleTime: Infinity,
  });
};
