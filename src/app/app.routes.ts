import {Routes} from "@angular/router";
//autenticacion
import {LoginComponent} from "./Autenticacion/login.component";
import {RegistroComponent} from "./Autenticacion/registro.component";

//Usuario
import { InboxComponent } from "./Usuario/inbox.component";
import { MailDetailComponent} from "./Usuario/mail-detail.component";
import { MailNewComponent} from "./Usuario/mail-new.component";
import { ChatUserComponent} from "./Usuario/chat-user.component";
import { ContactsComponent} from "./Usuario/contacts.component";
import { PerfilUserComponent} from "./Usuario/perfil-user.component";
import { PerfilFriendComponent} from "./Usuario/perfil-friend.component";
import { ConfiguracionComponent} from "./Usuario/configuracion.component";
import { AyudaUserComponent} from "./Usuario/ayuda.component";
//user Root
import { AdminRedesComponent} from "./SuperUser/admin-redes.component";
import { RedDetailComponent} from "./SuperUser/red-detail.component";
import { MapRedesComponent} from "./SuperUser/map-redes.component";
import { SolicitudRedComponent} from "./SuperUser/solicitud-red.component";
import { SolicitudDetailComponent} from "./SuperUser/solicitud-detail.component";

//social
import { SocialComponent} from "./Social/social.component";

//error
import {ErrorComponent} from "./Error/error.component";

//otros
import {Dashboard1Component} from "./views/dashboards/dashboard1.component";
import {Dashboard2Component} from "./views/dashboards/dashboard2.component";
import {Dashboard3Component} from "./views/dashboards/dashboard3.component";
import {Dashboard4Component} from "./views/dashboards/dashboard4.component";
import {Dashboard41Component} from "./views/dashboards/dashboard41.component";
import {Dashboard5Component} from "./views/dashboards/dashboard5.component";

import {StarterViewComponent} from "./views/appviews/starterview.component";


import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'profile', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      {path: 'dashboard41', component: Dashboard41Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent},
      {path: 'inbox/:bandeja', component: InboxComponent},
      {path: 'maildetail/:id', component: MailDetailComponent},
      {path: 'mailnew', component: MailNewComponent},
      {path: 'chat', component: ChatUserComponent},
      {path: 'contacts/:tipo', component: ContactsComponent},
      {path: 'profile', component: PerfilUserComponent},
      {path: 'error', component: ErrorComponent},
      {path: 'social', component: SocialComponent},
      {path: 'settings', component: ConfiguracionComponent},
      {path: 'profile/friend/:id', component: PerfilFriendComponent},
      {path: 'ayuda', component: AyudaUserComponent},


      {path: 'root/redes', component: AdminRedesComponent},
      {path: 'root/redinfo/:id', component: RedDetailComponent},
      {path: 'root/map', component: MapRedesComponent},
      {path: 'root/solred', component: SolicitudRedComponent},
      {path: 'root/solinfo/:id', component: SolicitudDetailComponent}




    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'error'}
];
/*
export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      {path: 'dashboard41', component: Dashboard41Component}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'error', component: ErrorComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  //
 { path:'login', component:LoginComponent},
 { path:'registro', component:RegistroComponent} ,
  // Handle all other routes
  {path:'**', component: ErrorComponent}
];
*/
