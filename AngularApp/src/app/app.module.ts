import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Route } from '@angular/router';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthGuard } from './auth.guard';

 const routes:Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      //  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'about', component: PrivacyComponent },
      { path: 'terms&conditions', component: PrivacyComponent },
      { path: 'products', component: PrivacyComponent },

    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    RoutingComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
      RouterModule.forRoot(routes),
    // RouterModule

    ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
