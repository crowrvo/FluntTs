import { Notification } from "../Notifications";

export default class Contract {
  private _notifications: Array<Notification> = [];

  public get GetNotifications(): Array<Notification> {
    return this._notifications;
  }

  Equal(Value: any, Compare: any, Key: string, Message: string): this {
    if (Value != Compare) {
      this._notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  NotEqual(Value: any, Compare: any, Key: string, Message: string): this {
    if (Value == Compare) {
      this._notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  StrictEqual(Value: any, Compare: any, Key: string, Message: string): this {
    if (Value !== Compare) {
      this._notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  StrictNotEqual(Value: any, Compare: any, Key: string, Message: string): this {
    if (Value === Compare) {
      this._notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
}
