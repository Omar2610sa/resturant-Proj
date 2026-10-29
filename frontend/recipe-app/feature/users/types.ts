import { Pagination } from "@/types";
import { User } from "../auth/types";

export interface UsersData {
    users: User[];
    pagination: Pagination
}
