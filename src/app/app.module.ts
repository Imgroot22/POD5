import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PensionDisbursementComponent } from './pension-disbursement/pension-disbursement.component';
import { PensionInputComponent } from './pension-input/pension-input.component';
import { SuccessComponent } from './success/success.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    PensionDisbursementComponent,
    PensionInputComponent,
    SuccessComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    RouterModule.forRoot(
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'persionDisbursement',
          component: PensionDisbursementComponent
        },
        {
          path: 'persionerInput',
          component: PensionInputComponent
        },
        {
          path: 'success',
          component: SuccessComponent
        },
        {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        },
        {
          path: '**',
          component: ErrorComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
