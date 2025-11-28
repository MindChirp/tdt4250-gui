import { useQuery } from "@tanstack/react-query";

export const useGameState = () => {
  const data = useQuery({
    queryFn: () => {},
    queryKey: ["gamestate"],
  });

  return {} as const;
};
