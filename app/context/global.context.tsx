"use client"

import { createContext, ReactNode, useState } from "react";
import { AppNotification, GlobalContextInterface } from "./global.interface";

export const GlobalContext = createContext<GlobalContextInterface>({
	notification: { status: "none", text: "" },
    isMenuWindowOpen: false,

	setNotification: () => {},
    setIsMenuOpen: () => {},
});

export const GlobalContextProvider = ({
    children
}: {
    children: ReactNode;
})=> {
	const [notification, setNotification] = useState<AppNotification>(
        { status: "none", text: "" }
    );
    const [isMenuWindowOpen, setIsMenuOpen] = useState(false);


    return (
        <GlobalContext.Provider 
            value={{
                notification: notification,
                isMenuWindowOpen: isMenuWindowOpen,

                setNotification,
                setIsMenuOpen,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
