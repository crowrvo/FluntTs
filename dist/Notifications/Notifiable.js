"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contract_1 = __importDefault(require("../Contracts/Contract"));
const Notification_1 = __importDefault(require("./Notification"));
class Notifiable {
    _notifications;
    constructor() {
        this._notifications = [];
    }
    get GetNotifications() {
        return this._notifications;
    }
    get GetMessages() {
        return this._notifications.map((x) => x.message);
    }
    AddNotification(key, message) {
        if (key instanceof Notification_1.default) {
            this._notifications.unshift(key);
            return;
        }
        if (key instanceof Contract_1.default) {
            const nots = key.GetNotifications;
            this._notifications.unshift(...nots);
            return;
        }
        if (typeof key == "string") {
            let _notification = new Notification_1.default(key, message);
            this._notifications.unshift(_notification);
            return;
        }
        this._notifications.unshift(...key);
    }
    isValid = () => this._notifications.length == 0;
}
exports.default = Notifiable;
//# sourceMappingURL=Notifiable.js.map