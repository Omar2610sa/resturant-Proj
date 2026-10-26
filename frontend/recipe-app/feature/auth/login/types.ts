export type LoginState = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: string;
    success?: boolean;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type LoginResponse = {
    status: string,
    data: {
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        token: string;
    };
};

