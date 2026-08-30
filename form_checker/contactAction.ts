import { ContactFormScheme, FormState } from "./FormScheme";
import { MessageService } from "@/helpers";
import { z } from "zod";

export async function contactAction(_:FormState, formData: FormData) {
    const contactData = {
        material: formData.get("material"),
        installationStyle: formData.get("installationStyle"),
        format: formData.get("format"),
        dimensions: formData.get("dimensions"),
        description: formData.get("description"),
    };

    const parsed = ContactFormScheme.safeParse(contactData);

    if (!parsed.success) {
        const errors = z.flattenError(parsed.error).fieldErrors;

        return {
            errors: {
                material: errors.material?.[0],
                installationStyle: errors.installationStyle?.[0],
                format: errors.format?.[0],
                dimensions: errors.dimensions?.[0],
                description: errors.description?.[0],
            },
            message: "Un champ n'a pas été renseigné correctement"
        }
    }

    const url = MessageService.sendMessageWhatsapp(parsed.data);

    return {
        errors: {},
        success: true,
        message: "Le message a été rédigé avec succès",
        redirectLink: url,
    }
}
