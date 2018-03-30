import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { SocialComponent} from "./social.component";



@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    SocialComponent
  ],
})

export class SocialModule {
}
