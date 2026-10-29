import { serverApi } from "@/lib/apis/serverApi";
import { GetParams } from "@/types";
import { UsersData } from "../types";

export const getUsers = async ({
    page = 1,
    limit = 9,
    search,
}: GetParams = {}) => {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
    });

    if (search) params.set("search", search);

    return serverApi<{ data: UsersData }>(`users?${params.toString()}`);
};