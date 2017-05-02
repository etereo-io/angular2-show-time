import { NgModule } from '@angular/core';
import { Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

import { CoreModule } from 'modules/core';
import { UINavModule } from 'modules/ui-nav';
import { LoginModule } from 'modules/login';
import { HomeModule } from 'modules/home';


import { TranslateModule, TranslateLoader } from 'ng2-translate';
import { TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import { HttpModule } from '@etereo/http';
import { AuthModule, AuthConnectorService } from '@etereo/auth';
import { DomUtilsModule } from '@etereo/dom-utils';
// import { CorbelModule, CorbelAuthConnectorService } from '@etereo/corbel';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

// For AoT compiler
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/locales', '.json');
}

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent
  ],

  providers: [],

  // Modules
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      // useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    ToastModule.forRoot(),
    CoreModule,
    HttpModule.forRoot({ baseUrl: 'http://localhost:9000'}),
    // CorbelModule.forRoot(process.env.APP_CONFIG.corbel),
    AuthModule.forRoot({ endpoints: { REGISTER: 'signup', LOGIN: 'login', LOGOUT: 'logout', ME: 'profile' }}),
    DomUtilsModule,
    LoginModule,
    UINavModule,
    HomeModule,
    AppRouterModule
  ],

  // Main Component
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
