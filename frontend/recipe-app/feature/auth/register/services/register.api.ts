import { apiClient } from "@/lib/apis/apiClient";
import { RegisterPayload, RegisterResponse } from "../type";


export async function registerService(payload: RegisterPayload) {
    return apiClient<RegisterResponse>("auth/register", {
        method: "POST",
        body: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password
        },
    });
}