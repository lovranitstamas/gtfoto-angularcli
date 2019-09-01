export class MessageModel {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;

  constructor(param?: MessageModel) {
    Object.assign(this, param);
  }
}
