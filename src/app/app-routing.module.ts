import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { LoginComponent } from "./login/login.component";
import { DefaultLayoutComponent } from "./default-layout/default-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
