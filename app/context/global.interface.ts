import { Dispatch, SetStateAction } from "react";

export type NotificationStatus = "error" | "alert" | "success" | "none";

export interface AppNotification {
    status: NotificationStatus;
    text: string;
}

export interface GlobalContextInterface {
    notification: AppNotification;
    isMenuWindowOpen: boolean;

    setNotification: Dispatch<SetStateAction<AppNotification>>;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
