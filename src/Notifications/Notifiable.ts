import Contract from "../Contracts/Contract";
import Notification from "./Notification";

export default abstract class Notifiable {
  private _notifications: Array<Notification>;

  constructor() {
    this._notifications = [];
  }
  public get GetNotifications(): Array<Notification> {
    return this._notifications;
  }

  public get GetMessages(): Array<string> {
    return this._notifications.map((x) => x.message);
  }

  public AddNotification(key: string, message: string): void;
  public AddNotification(notification: Notification): void;
  public AddNotification(notifications: Array<Notification>): void;
  public AddNotification(Contract: Contract): void;
  public AddNotification(
    key?: string | Notification | Array<Notification> | Contract,
    message?: string
  ): void {
    if (key instanceof Notification) {
      this._notifications.unshift(key);
      return;
    }
    if (key instanceof Contract) {
      const nots = key.GetNotifications;
      this._notifications.unshift(...nots);
      return;
    }
    if (typeof key == "string") {
      let _notification = new Notification(key, message);
      this._notifications.unshift(_notification);
      return;
    }

    this._notifications.unshift(...(key as Array<Notification>));
  }

  public isValid = (): boolean => this._notifications.length == 0;
}
