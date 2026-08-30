import { z } from "zod";

// const numberFromInput = (schema: z.ZodType<number>) =>
//     z.preprocess(
//         (value) => value === "" ? undefined : value,
//         schema,
//     );

// const emptyToUndefined = (schema: z.ZodTypeAny) =>
//     z.preprocess(
//         (value) => value === "" ? undefined : value,
//         schema.optional()
//     );

export const ContactFormScheme = z.object({
    material: z.enum([
        "carrelage",
        "faience",
        "parquet",
        "panneaux decoratifs",
    ], {
        message: "Veuillez sélectionner un matériau",
    }),

    installationStyle: z.enum([
        "droite",
        "diagonale",
        "decalee",
        "chevrons",
        "autre",
    ], {
        message: "Veuillez sélectionner un style d'installation",
    }),

    format: z
        .string()
        .trim()
        .min(1, "Veuillez indiquer le format"),

    dimensions: z
        .string()
        .trim()
        .min(1, "Veuillez indiquer les dimensions"),

    description: z
        .string()
        .trim()
        .min(10, "La description doit contenir au moins 10 caractères"),
});

export type FormError = {
    material?: string;
    installationStyle?: string;
    format?: string;
    dimensions?: string;
    description?: string;
};

export type FormState =
    {
        errors?: FormError,
        message?: string,
        success?: boolean
        redirectLink?: string;
    };