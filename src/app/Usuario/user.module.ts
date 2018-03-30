import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { InboxComponent} from "./inbox.component";
import { MailMenuComponent} from "./mail-menu.component";
import { MailDetailComponent} from "./mail-detail.component";
import { MailNewComponent} from "./mail-new.component";
import { ChatUserComponent} from "./chat-user.component";
import { ContactsComponent} from "./contacts.component";
import { PerfilUserComponent} from "./perfil-user.component";
import { ConfiguracionComponent} from "./configuracion.component";
import { PerfilFriendComponent} from "./perfil-friend.component";
import { AyudaUserComponent} from "./ayuda.component";


@NgModule({
  declarations: [
    InboxComponent, MailMenuComponent, MailDetailComponent,MailNewComponent,ChatUserComponent,ContactsComponent,PerfilUserComponent,ConfiguracionComponent,
    PerfilFriendComponent, AyudaUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    InboxComponent, MailMenuComponent, MailDetailComponent,MailNewComponent,ChatUserComponent,ContactsComponent,PerfilUserComponent,ConfiguracionComponent,
    PerfilFriendComponent, AyudaUserComponent
  ],
})

export class UserModule {
}
