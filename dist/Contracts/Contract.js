"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notifications_1 = require("../Notifications");
class Contract {
    _notifications = [];
    get GetNotifications() {
        return this._notifications;
    }
    Equal(Value, Compare, Key, Message) {
        if (Value != Compare) {
            this._notifications.unshift(new Notifications_1.Notification(Key, Message));
        }
        return this;
    }
    NotEqual(Value, Compare, Key, Message) {
        if (Value == Compare) {
            this._notifications.unshift(new Notifications_1.Notification(Key, Message));
        }
        return this;
    }
    StrictEqual(Value, Compare, Key, Message) {
        if (Value !== Compare) {
            this._notifications.unshift(new Notifications_1.Notification(Key, Message));
        }
        return this;
    }
    StrictNotEqual(Value, Compare, Key, Message) {
        if (Value === Compare) {
            this._notifications.unshift(new Notifications_1.Notification(Key, Message));
        }
        return this;
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map