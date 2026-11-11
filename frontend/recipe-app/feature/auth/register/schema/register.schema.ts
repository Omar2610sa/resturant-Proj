import { z } from "zod";

export function createRegisterSchema(messages: {
  invalidEmail: string;
  passwordMin: string;
  firstNameMin: string;
  lastNameMin: string;
}) {
  return z.object({
    firstName: z.string().min(3, messages.firstNameMin),
    lastName: z.string().min(3, messages.lastNameMin),
    email: z.email(messages.invalidEmail),
    password: z.string().min(7, messages.passwordMin),
  });
}

export type RegisterFormValues = z.infer<ReturnType<typeof createRegisterSchema>>;