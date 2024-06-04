import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3, "O numero minimo de caracteres e 3."),
    lastname: z.string().min(3, "O numero minimo de caracteres e 3."),
    gender: z.string().refine(field => field !== "select", {
        message: "Voce precisa escolher um genero",
    }),

    email: z
        .string()
        .min(1, "O campo e obrigatorio")
        .email("Utilize um email valido"),

    password: z.string().min(6, "A senha precisa ter no minimo 6 caracteres"),

    confirmpassword: z
        .string()
        .min(6, "A confirmacao precisa ter no minimo 6 caracters"),

    agree: z.boolean().refine(field => field === true, {
        message: "Voce precisa concordar com os termos.",
    })
})

    .refine(field => field.password === field.confirmpassword, {
        message: "As senhas precisam ser iguais.",
        path: ["confirmpassword"],
    });


export type FormSchema = z.infer<typeof formSchema>;