import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { AdminRedesComponent} from "./admin-redes.component";
import { RedDetailComponent} from "./red-detail.component";
import { MapRedesComponent} from "./map-redes.component";
import { SolicitudRedComponent} from "./solicitud-red.component";
import { SolicitudDetailComponent} from "./solicitud-detail.component";


@NgModule({
  declarations: [
    AdminRedesComponent, RedDetailComponent, MapRedesComponent, SolicitudRedComponent, SolicitudDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    AdminRedesComponent,RedDetailComponent, MapRedesComponent, SolicitudRedComponent, SolicitudDetailComponent
  ],
})

export class AdminRootModule {
}
