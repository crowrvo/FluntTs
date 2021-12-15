import {
  InvalidUsingString,
  InvalidUsingObject,
  InvalidUsingObjectArray,
} from "../Mock/Invalids";
import "mocha";
import * as assert from "assert";

describe("Notifications Invalidas", () => {
  it("Deve retornar IsValid como falso com um keypair, e uma Notificação", () => {
    let invalid1 = new InvalidUsingString();
    assert.equal(invalid1.isValid(), false, "Error: Valid retornou true");
    assert.ok(
      invalid1.GetNotifications.length > 0,
      "Error: Nenhuma notificação na lista"
    );
    console.log(invalid1.toString());
  });
  it("Deve retornar IsValid como falso com um object, e uma Notificação", () => {
    let invalid1 = new InvalidUsingObject();
    assert.equal(invalid1.isValid(), false, "Error: Valid retorno true");
    assert.ok(
      invalid1.GetNotifications.length > 0,
      "Error: Nenhuma notificação na lista"
    );
    console.log(invalid1);
  });
  it("Deve retornar IsValid como falso, e três Notificação", () => {
    let invalid1 = new InvalidUsingObjectArray();
    assert.equal(invalid1.isValid(), false, "Error: Valid retorno true");
    assert.ok(
      invalid1.GetNotifications.length == 3,
      "Error: Menos de 3 notificações na lista"
    );
    console.log(invalid1);
  });
});
