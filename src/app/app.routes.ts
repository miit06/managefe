import { Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';


export const routes: Routes = [
  { path: '', redirectTo: 'data-table', pathMatch: 'full' },
  {path: 'data-table',component:DatatableComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'add',component:AddComponent}

];

