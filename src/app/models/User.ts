export class User {
  name: string;
  email: string;
  phone: string;
  nickname: string;
  password: string;

  constructor(name: string, email: string, phone: string, nickname: string, password: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.nickname = nickname;
    this.password = password;
  }
}
