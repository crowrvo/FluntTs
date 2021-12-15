import { Notifiable, Notification } from "../Notifications";
export class InvalidUsingString extends Notifiable {
  constructor() {
    super();
    this.AddNotification("InvalidUsingString.test", "Notificação de teste");
  }
}
export class InvalidUsingObject extends Notifiable {
  constructor() {
    super();
    let Not = new Notification(
      "InvalidUsingObject.test",
      "Notificação de teste"
    );
    this.AddNotification(Not);
  }
}
export class InvalidUsingObjectArray extends Notifiable {
  constructor() {
    super();
    let Not = [
      new Notification("InvalidUsingObject.test", "Notificação de teste 1"),
      new Notification("InvalidUsingObject.test", "Notificação de teste 2"),
      new Notification("InvalidUsingObject.test", "Notificação de teste 3"),
    ];
    this.AddNotification(Not);
  }
}
