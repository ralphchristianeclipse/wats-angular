import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  credential: { email: string; password: string } = {
    email: "",
    password: ""
  };
  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.authService.auth) return this.router.navigate(["/dashboard"]);
  }

  onLogin() {
    this.authService.login(this.credential.email, this.credential.password);
  }
}
