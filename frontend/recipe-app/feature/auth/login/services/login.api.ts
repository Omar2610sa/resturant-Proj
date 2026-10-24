import { apiClient } from "@/lib/apis/apiClient";
import { LoginPayload, LoginResponse } from "../types";


export async function loginService(payload: LoginPayload) {
    return apiClient<LoginResponse>("auth/login", {
        method: "POST",
        body: {
            email: payload.email,
            password: payload.password
        },
    });
}