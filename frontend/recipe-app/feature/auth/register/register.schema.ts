import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(3, "الاسم الاول لازم تكون 3 أحرف على الأقل"),
  lastName: z.string().min(3, "الاسم الاخير لازم تكون 3 أحرف على الأقل"),
  email: z.email("عنوان بريد إلكتروني غير صالح"),
  password: z.string().min(7, "كلمة المرور لازم تكون 7 أحرف على الأقل"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;