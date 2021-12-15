export default class Notification {
  public key?: string;
  public message?: string;

  /**
  * @param key Origem
  * @param message Mensagem recebida
  */
  constructor(key?: string, message?: string) {
    this.key = key;
    this.message = message;
  }
}