import { serverApi } from "@/lib/apis/serverApi";
import { AnalyticsData } from "../types";


export const getAnalytics = async () => {
    return serverApi<AnalyticsData>(`analytics`);
};