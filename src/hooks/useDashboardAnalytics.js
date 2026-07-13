import { useQuery } from "@tanstack/react-query";

import { getDashboardAnalytics } from "../services/analyticsService";

export const useDashboard = () =>

    useQuery({

        queryKey: ["dashboard-analytics"],

        queryFn: getDashboardAnalytics

    });