"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../Mock/Contracts/base");
require("mocha");
const assert = __importStar(require("assert"));
describe("Notificações com contrato", () => {
    it("Deve retornar IsValid como falso e 4 Notificações", () => {
        let invalid1 = new base_1.InvalidTestingsAllMethods();
        assert.equal(invalid1.isValid(), false, "Error: Valid retornou true");
        assert.ok(invalid1.GetNotifications.length >= 4, "Error: Menos de 4 Notificações na lista");
    });
    it("Deve retornar IsValid como falso e 2 Notificações", () => {
        let invalid1 = new base_1.InvalidTestings4Methods2Notifications();
        assert.equal(invalid1.isValid(), false, "Error: Valid retornou true");
        assert.ok(invalid1.GetNotifications.length >= 2, "Error: Menos de 2 Notificações na lista");
    });
    it("Deve retornar IsValid como true e 0 Notificações", () => {
        let invalid1 = new base_1.ValidTesting4Tests0Notifications();
        assert.equal(invalid1.isValid(), true, "Error: Valid retornou false");
        assert.ok(invalid1.GetNotifications.length == 0, "Error: Retornou Notificações");
    });
});
//# sourceMappingURL=Contracts.test.js.map