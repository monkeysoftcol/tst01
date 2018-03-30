import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { RegistroComponent} from "./registro.component";
import { LoginComponent } from "./login.component";
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    RegistroComponent,
    LoginComponent
  ],
})

export class AutenticacionModule {
}
