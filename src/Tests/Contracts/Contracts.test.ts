import {
  InvalidTestingsAllMethods,
  ValidTesting4Tests0Notifications,
  InvalidTestings4Methods2Notifications,
} from "../../Mock/Contracts/base";
import "mocha";
import * as assert from "assert";

describe("Notificações com contrato", () => {
  it("Deve retornar IsValid como falso e 4 Notificações", () => {
    let invalid1 = new InvalidTestingsAllMethods();
    assert.equal(invalid1.isValid(), false, "Error: Valid retornou true");
    assert.ok(
      invalid1.GetNotifications.length >= 4,
      "Error: Menos de 4 Notificações na lista"
    );
  });
  it("Deve retornar IsValid como falso e 2 Notificações", () => {
    let invalid1 = new InvalidTestings4Methods2Notifications();
    assert.equal(invalid1.isValid(), false, "Error: Valid retornou true");
    assert.ok(
      invalid1.GetNotifications.length >= 2,
      "Error: Menos de 2 Notificações na lista"
    );
  });

  it("Deve retornar IsValid como true e 0 Notificações", () => {
    let invalid1 = new ValidTesting4Tests0Notifications();
    assert.equal(invalid1.isValid(), true, "Error: Valid retornou false");
    assert.ok(
      invalid1.GetNotifications.length == 0,
      "Error: Retornou Notificações"
    );
  });
});
