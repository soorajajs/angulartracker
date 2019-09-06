import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ScreenComponent } from './screen/screen.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import {AngularFirestore,AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { LoginComponent } from './login/login.component';
import {  MatCardModule } from '@angular/material';
import {  MatProgressSpinnerModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button'; 
import { AgmCoreModule } from  '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import {GeoService} from './geo.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { VehicalComponent } from './login/vehical/vehical.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ScreenComponent,
    CompareValidatorDirective,
    LoginComponent,
    GoogleMapComponent,
    VehicalComponent

 
  ],
  imports: [
    BrowserModule,
	MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey:environment.googleMapsKey
    })
  ],
  providers: [AngularFirestore,{ provide: FirestoreSettingsToken, useValue: {} } ,GeoService,AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
