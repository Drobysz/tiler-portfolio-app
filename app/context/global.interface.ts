import { Dispatch, SetStateAction } from "react";

export type NotificationStatus = "error" | "alert" | "success" | "none";

export interface Coords {
    x: number;
    y: number;
}

export interface AppNotification {
    status: NotificationStatus;
    text: string;
}

export interface GlobalContextInterface {
    mouseText: string;
    mouseGuide: Coords | null;
    isMouseVisible: boolean;
    notification: AppNotification;

    setMouseText: Dispatch<SetStateAction<string>>;
    setMouseGuide: Dispatch<SetStateAction<Coords | null>>;
    setNotification: Dispatch<SetStateAction<AppNotification>>;
}
