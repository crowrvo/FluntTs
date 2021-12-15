import Contract from "../Contracts/Contract";
import Notification from "./Notification";
export default abstract class Notifiable {
    private _notifications;
    constructor();
    get GetNotifications(): Array<Notification>;
    get GetMessages(): Array<string>;
    AddNotification(key: string, message: string): void;
    AddNotification(notification: Notification): void;
    AddNotification(notifications: Array<Notification>): void;
    AddNotification(Contract: Contract): void;
    isValid: () => boolean;
}
