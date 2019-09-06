import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ScreenComponent } from './screen/screen.component';
import { LoginComponent } from './login/login.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { VehicalComponent } from './login/vehical/vehical.component';
const routes: Routes = [
  {path:'',component:ScreenComponent},
    {path:'register',component: RegisterComponent},
    {path:'login',component:  LoginComponent},
    {path:'map',component:  GoogleMapComponent },
	{path:'vehical',component: VehicalComponent   }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
