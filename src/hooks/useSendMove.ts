import { sendMouseClick } from "@/services/interaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSendMove = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: sendMouseClick,
    mutationKey: ["sendmove"],
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["gamestate"] });
    },
  });
};
