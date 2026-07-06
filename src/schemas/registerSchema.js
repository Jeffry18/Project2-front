import { z } from "zod";

export const registerSchema = z
  .object({
    organizationName: z
      .string()
      .min(3, "Organization name must be at least 3 characters"),

    adminName: z
      .string()
      .min(3, "Admin name must be at least 3 characters"),

    adminEmail: z
      .string()
      .email("Please enter a valid email"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
  });