import { User } from "../auth/types";

export interface UsersData {
    users: User[];
    pagination: {
        total: number;
        limit: number;
        page: number;
        pages: number;
    };
}
