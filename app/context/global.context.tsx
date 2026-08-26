"use client"

import { createContext, ReactNode, useState } from "react";
import { AppNotification, Coords, GlobalContextInterface } from "./global.interface";
import { useWindowWidth } from "@/hooks";

export const GlobalContext = createContext<GlobalContextInterface>({
    mouseText: "",
	mouseGuide: null,
	isMouseVisible: false,
	notification: { status: "none", text: "" },

    setMouseText: ()=> {},
	setMouseGuide: ()=> {},
	setNotification: () => {},
});

export const GlobalContextProvider = ({
    children
}: {
    children: ReactNode;
})=> {
    const [mouseText, setMouseText] = useState("");
	const [mouseGuide, setMouseGuide] = useState<Coords | null>(null);
	const [notification, setNotification] = useState<AppNotification>({ status: "none", text: "" });


	const isMouseVisible = useWindowWidth(768) as boolean;

    return (
        <GlobalContext.Provider 
            value={{
                mouseText: mouseText,
                mouseGuide: mouseGuide,
                notification: notification,
                isMouseVisible: isMouseVisible,

                setMouseText,
                setMouseGuide,
                setNotification,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
