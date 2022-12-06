import { NgModule} from '@angular/core';
import appRoutes from '../routerConfig';

import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ReminderModalComponent } from './components/reminder-modal/reminder-modal.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ReminderDirective } from './directives/reminder.directive';
import { ReminderItemComponent } from './components/reminder-item/reminder-item.component';
import { ReminderStyle1Component } from './reminder-style1/reminder-style1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ReminderModalComponent,
    ReminderComponent,
    ReminderDirective,
    ReminderItemComponent,
    ReminderStyle1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
