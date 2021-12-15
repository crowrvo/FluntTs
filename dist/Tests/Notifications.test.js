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
const Invalids_1 = require("../Mock/Invalids");
require("mocha");
const assert = __importStar(require("assert"));
describe("Notifications Basicas", () => {
    it("Deve retornar IsValid como falso com um keypair, e uma Notificação", () => {
        let invalid1 = new Invalids_1.InvalidUsingString();
        assert.equal(invalid1.isValid(), false, "Error: Valid retornou true");
        assert.ok(invalid1.GetNotifications.length > 0, "Error: Nenhuma notificação na lista");
    });
    it("Deve retornar IsValid como falso com um object, e uma Notificação", () => {
        let invalid1 = new Invalids_1.InvalidUsingObject();
        assert.equal(invalid1.isValid(), false, "Error: Valid retorno true");
        assert.ok(invalid1.GetNotifications.length > 0, "Error: Nenhuma notificação na lista");
    });
    it("Deve retornar IsValid como falso, e três Notificação", () => {
        let invalid1 = new Invalids_1.InvalidUsingObjectArray();
        assert.equal(invalid1.isValid(), false, "Error: Valid retorno true");
        assert.ok(invalid1.GetNotifications.length == 3, "Error: Menos de 3 notificações na lista");
    });
    it("Deve retornar uma array das mensagens das notificações", () => {
        let invalid1 = new Invalids_1.InvalidUsingObjectArray();
        assert.ok(invalid1.GetMessages.length == 3, "Error: Menos de 3 mensagens na lista");
    });
});
//# sourceMappingURL=Notifications.test.js.map