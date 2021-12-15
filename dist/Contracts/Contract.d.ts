import { Notification } from "../Notifications";
export default class Contract {
    private _notifications;
    get GetNotifications(): Array<Notification>;
    Equal(Value: any, Compare: any, Key: string, Message: string): this;
    NotEqual(Value: any, Compare: any, Key: string, Message: string): this;
    StrictEqual(Value: any, Compare: any, Key: string, Message: string): this;
    StrictNotEqual(Value: any, Compare: any, Key: string, Message: string): this;
}
