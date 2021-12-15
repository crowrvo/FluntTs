import Contract from "../../Contracts/Contract";
import { Notifiable, Notification } from "../../Notifications";

export class ValidTesting4Tests0Notifications extends Notifiable {
  constructor() {
    super();
    this.AddNotification(
      new Contract()
        .Equal(
          true,
          true,
          "ContractTestEqual",
          "Essa notificação Não devia esta aqui"
        )
        .NotEqual(
          true,
          false,
          "ContractTestNotEqual",
          "Essa notificação Não devia esta aqui"
        )
        .StrictEqual(
          true,
          true,
          "ContractTestStrictEqual",
          "Essa notificação Não devia esta aqui"
        )
        .StrictNotEqual(
          true,
          "true",
          "ContractTestStrictNotEqual",
          "Essa notificação Não devia esta aqui"
        )
    );
  }
}

export class InvalidTestings4Methods2Notifications extends Notifiable {
  constructor() {
    super();
    this.AddNotification(
      new Contract()
        .Equal(
          true,
          true,
          "ContractTestEqual",
          "Essa notificação Não devia esta aqui"
        )
        .NotEqual(
          true,
          false,
          "ContractTestNotEqual",
          "Essa notificação Não devia esta aqui"
        )
        .StrictEqual(
          true,
          "true",
          "ContractTestStrictEqual",
          "Os valores não são Estritamente iguais"
        )
        .StrictNotEqual(
          true,
          true,
          "ContractTestStrictNotEqual",
          "Os valores são Estritamente iguais"
        )
    );
  }
}

export class InvalidTestingsAllMethods extends Notifiable {
  constructor() {
    super();
    this.AddNotification(
      new Contract()
        .Equal(true, false, "ContractTestEqual", "Os valores não são iguais")
        .NotEqual(true, true, "ContractTestNotEqual", "Os valores são iguais")
        .StrictEqual(
          true,
          "true",
          "ContractTestStrictEqual",
          "Os valores não são Estritamente iguais"
        )
        .StrictNotEqual(
          true,
          true,
          "ContractTestStrictNotEqual",
          "Os valores são Estritamente iguais"
        )
    );
  }
}
