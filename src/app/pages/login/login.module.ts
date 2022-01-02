import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

// Import login logout button
import { LoginButtonComponent } from '../login-button.component';
import { LogoutButtonComponent } from '../logout-button.component';
//

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, LoginButtonComponent, LogoutButtonComponent]
})
export class LoginPageModule {}
