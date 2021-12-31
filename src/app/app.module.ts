import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import the types from the SDK AUTH0
import { AuthModule } from '@auth0/auth0-angular';
import config from '../../capacitor.config';

// Build the URL that Auth0 should redirect back to AUTH0
const redirectUri = `${config.appId}://rune1979.eu.auth0.com/capacitor/${config.appId}/callback`;

// Adding the AuthModule.forRoot() below..

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AuthModule.forRoot({
    domain: "rune1979.eu.auth0.com",
    clientId: "r3s5WbUDX6Eou0LHN1stx8Zhjygo73CK",
    redirectUri
  }),
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
