import { ContactForm } from "@/types/contact";

export class MessageService {
    static sendMessageWhatsapp (data: ContactForm) {
        const message = `
Bonjour,

Nouvelle demande depuis le site.

Matériel: ${data.material}
Format: ${data.format}
Dimensions: ${data.dimensions}
Type d'installation: ${data.installationStyle}

Description du projet:
${data.description}
        `.trim();

        const phone = "33678322060"
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        return url;
    }
}