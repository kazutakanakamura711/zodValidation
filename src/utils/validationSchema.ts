import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty("名前は必須です")
    .min(3, "名前は3文字以上です")
    .max(50),
  number: z
    .string()
    .refine((value) => /^\d+$/.test(value), "半角数字のみ有効です")
    .transform((value) => parseInt(value, 10)),
  email: z
    .string()
    .nonempty("メールアドレスは必須です")
    .email("正しいメールを入力してください")
    .min(3)
    .max(50),
  password: z
    .string()
    .nonempty("パスワードは必須です")
    .min(8, "パスワードは8文字以上です")
    .max(50),
  group: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .nonempty("グループは必須です"),
});
