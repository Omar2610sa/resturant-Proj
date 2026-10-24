import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("عنوان بريد إلكتروني غير صالح"),
  password: z.string().min(7, "كلمة المرور لازم تكون 7 أحرف على الأقل"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;