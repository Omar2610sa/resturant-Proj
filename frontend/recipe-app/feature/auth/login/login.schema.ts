import { z } from "zod";

export function createLoginSchema(messages: {
  invalidEmail: string;
  passwordMin: string;
}) {
  return z.object({
    email: z.email(messages.invalidEmail),
    password: z.string().min(7, messages.passwordMin),
  });
}

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;