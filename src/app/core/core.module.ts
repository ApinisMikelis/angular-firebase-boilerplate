import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from './containers/login/login.page';
import { MaterialModule } from '../material/material.module';

@NgModule({
     declarations: [LoginPageComponent],
     imports: [
          AngularFireModule.initializeApp(environment.firebase),
          BrowserModule,
          FormsModule,
          HttpClientModule,
          MaterialModule,
     ],
     providers: [],
})
export class CoreModule {}