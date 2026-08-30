export type MaterialType =
    | "carrelage"
    | "faience"
    | "parquet"
    | "panneaux decoratifs";

export type InstallationStyle =
    | "droite"
    | "diagonale"
    | "decalee"
    | "chevrons"
    | "autre";

export type JointType =
    | "standard"
    | "fin"
    | "large"
    | "sans joint"
    | "autre";

export type ContactForm = {
    // Type de revêtement
    material: MaterialType;

    // Style de pose
    installationStyle: InstallationStyle;

    // Format du carrelage / revêtement
    format: string;

    // Dimensions, par ex. "60x60 cm"
    dimensions: string;

    // Surface à couvrir en m²
    // surface: number;

    // Style de chauffage
    // heatingType?: string;

    // Plinthes
    // baseboards: boolean;

    // Habillage / rhabillage
    // cladding: boolean;

    // Joint de carrelage
    // jointType?: JointType;

    // Pour la faïence
    // faience?: {
    //     surface?: number;
    //     dimensions?: string;
    //     jointType?: JointType;
    // };

    // Description du projet par client
    description: string;
};
