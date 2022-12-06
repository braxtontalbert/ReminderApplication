import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { LoginComponent } from './app/components/login/login.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },

  {

    path: 'login',
    component: LoginComponent
  }
  
];
export default appRoutes;