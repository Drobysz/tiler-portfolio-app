import { FooterPoster } from "./types";

const footerPosters: Record<string, FooterPoster> = {
        "/": { 
            img_url: "/footer/footer1.webp", 
            backColor: "bg-yellow-500",
            textColor: "text-yellow-500",
        },
        "/projects": { 
            img_url: "/footer/footer2.webp", 
            backColor: "bg-gray-700",
            textColor: "text-gray-700",
        },
        "/contacts": { 
            img_url: "/footer/footer3.webp", 
            backColor: "bg-blue-700",
            textColor: "text-blue-700",
        },
        "/furnishers": { 
            img_url: "/footer/footer4.webp", 
            backColor: "bg-yellow-500",
            textColor: "text-yellow-500",
        },
    };

export default footerPosters;
