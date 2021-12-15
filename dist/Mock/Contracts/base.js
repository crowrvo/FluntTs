"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTestingsAllMethods = exports.InvalidTestings4Methods2Notifications = exports.ValidTesting4Tests0Notifications = void 0;
const Contract_1 = __importDefault(require("../../Contracts/Contract"));
const Notifications_1 = require("../../Notifications");
class ValidTesting4Tests0Notifications extends Notifications_1.Notifiable {
    constructor() {
        super();
        this.AddNotification(new Contract_1.default()
            .Equal(true, true, "ContractTestEqual", "Essa notificação Não devia esta aqui")
            .NotEqual(true, false, "ContractTestNotEqual", "Essa notificação Não devia esta aqui")
            .StrictEqual(true, true, "ContractTestStrictEqual", "Essa notificação Não devia esta aqui")
            .StrictNotEqual(true, "true", "ContractTestStrictNotEqual", "Essa notificação Não devia esta aqui"));
    }
}
exports.ValidTesting4Tests0Notifications = ValidTesting4Tests0Notifications;
class InvalidTestings4Methods2Notifications extends Notifications_1.Notifiable {
    constructor() {
        super();
        this.AddNotification(new Contract_1.default()
            .Equal(true, true, "ContractTestEqual", "Essa notificação Não devia esta aqui")
            .NotEqual(true, false, "ContractTestNotEqual", "Essa notificação Não devia esta aqui")
            .StrictEqual(true, "true", "ContractTestStrictEqual", "Os valores não são Estritamente iguais")
            .StrictNotEqual(true, true, "ContractTestStrictNotEqual", "Os valores são Estritamente iguais"));
    }
}
exports.InvalidTestings4Methods2Notifications = InvalidTestings4Methods2Notifications;
class InvalidTestingsAllMethods extends Notifications_1.Notifiable {
    constructor() {
        super();
        this.AddNotification(new Contract_1.default()
            .Equal(true, false, "ContractTestEqual", "Os valores não são iguais")
            .NotEqual(true, true, "ContractTestNotEqual", "Os valores são iguais")
            .StrictEqual(true, "true", "ContractTestStrictEqual", "Os valores não são Estritamente iguais")
            .StrictNotEqual(true, true, "ContractTestStrictNotEqual", "Os valores são Estritamente iguais"));
    }
}
exports.InvalidTestingsAllMethods = InvalidTestingsAllMethods;
//# sourceMappingURL=base.js.map