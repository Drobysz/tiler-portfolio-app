import { Metadata } from "next";
import { PageView } from "./page/PageView";

export const metadata: Metadata = {
    title: "Contacts | Contact carreleur à Étalans",
    description:
        "Présentez votre projet de carrelage, faïence, parquet ou panneaux décoratifs à Étalans ou en Franche-Comté et échangez avec Didier Puget via WhatsApp.",
};

export default function ContactPage() {
    return (
        <PageView />
    )
}
