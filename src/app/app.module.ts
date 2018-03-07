import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AuthService } from "./auth.service";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AuthLayoutComponent, DefaultLayoutComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
