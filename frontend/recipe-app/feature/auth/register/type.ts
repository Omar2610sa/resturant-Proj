export type RegisterState = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string;
    success?: boolean;
};

export type RegisterPayload = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type RegisterResponse = {
    status: string,
    data: {
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        token: string;
    };
};