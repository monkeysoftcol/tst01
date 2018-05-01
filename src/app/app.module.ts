import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Modulos
import { AutenticacionModule } from "./Autenticacion/autenticacion.module";
import {UserModule} from "./Usuario/user.module";
import {SocialModule} from "./Social/social.module";
import {AdminRootModule} from "./SuperUser/admin.root.module";



//Componentes individuales
import {ErrorComponent} from "./Error/error.component";
// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";
import {AppviewsModule} from "./views/appviews/appviews.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";

//HttpInterceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Autenticacion/token.interceptor';

//AuthGuard
import { AuthGuard } from './Autenticacion/auth.guard';

//_services
import { AuthenticationService } from './Services/authentication.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    AutenticacionModule,UserModule,SocialModule,AdminRootModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
