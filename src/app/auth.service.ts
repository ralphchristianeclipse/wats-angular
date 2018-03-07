import { Router } from "@angular/router";
import { User } from "./user";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  users: User[] = [
    new User("ralph@mail.com", "ralph"),
    new User("student@mail.com", "student"),
    new User("parent@mail.com", "parent")
  ];
  auth: User;
  constructor(private router: Router) {}

  login(email: string, password: string) {
    console.log(email, password);
    if (this.auth) return alert("Already Logged In");
    const user = this.findUserByEmail(email);
    if (!user) return alert("User not exist");
    if (!user.validatePassword(password))
      return alert(`Invalid password for ${user.email}`);
    this.auth = user;
    alert(`User authenticated: ${this.auth.email}`);
    this.router.navigate(["/dashboard"]);
  }

  findUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
}
