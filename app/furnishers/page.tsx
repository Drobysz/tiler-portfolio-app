import { Metadata } from "next";
import PageView from "./page/PageVIew";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Fournisseurs | Fournisseurs de carrelage et revêtements",
    description:
        "Découvrez Comofranc, Dalmau et Climent-Saône, fournisseurs de carrelage, revêtements et matériaux pour les projets de rénovation et d’aménagement.",
};

export default function FurnisherPage () {
    return (
        <Suspense>
            <PageView />
        </Suspense>
    )
}
