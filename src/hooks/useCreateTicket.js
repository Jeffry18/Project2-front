import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket } from "../services/ticketService";

export const useCreateTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });

      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });
};