import { useQuery } from "@tanstack/react-query";

import { getTickets } from "../services/ticketService";

export const useTickets = (params) =>
  useQuery({
    queryKey: ["tickets", params],
    queryFn: () => getTickets(params),
  });