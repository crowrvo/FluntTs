"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUsingObjectArray = exports.InvalidUsingObject = exports.InvalidUsingString = void 0;
const Notifications_1 = require("../Notifications");
class InvalidUsingString extends Notifications_1.Notifiable {
    constructor() {
        super();
        this.AddNotification("InvalidUsingString.test", "Notificação de teste");
    }
}
exports.InvalidUsingString = InvalidUsingString;
class InvalidUsingObject extends Notifications_1.Notifiable {
    constructor() {
        super();
        let Not = new Notifications_1.Notification("InvalidUsingObject.test", "Notificação de teste");
        this.AddNotification(Not);
    }
}
exports.InvalidUsingObject = InvalidUsingObject;
class InvalidUsingObjectArray extends Notifications_1.Notifiable {
    constructor() {
        super();
        let Not = [
            new Notifications_1.Notification("InvalidUsingObject.test", "Notificação de teste 1"),
            new Notifications_1.Notification("InvalidUsingObject.test", "Notificação de teste 2"),
            new Notifications_1.Notification("InvalidUsingObject.test", "Notificação de teste 3"),
        ];
        this.AddNotification(Not);
    }
}
exports.InvalidUsingObjectArray = InvalidUsingObjectArray;
//# sourceMappingURL=Invalids.js.map