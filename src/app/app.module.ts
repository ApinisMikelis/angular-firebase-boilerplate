import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { InputModule } from './input/input.module';
import { DisplayModule } from './display/display.module';

@NgModule({
     declarations: [AppComponent],
     imports: [
          AngularFireAuthModule,
          BrowserModule,
          BrowserAnimationsModule,
          CoreModule,
          AppRoutingModule,
          AngularFirestoreModule,
          AngularFireModule.initializeApp(environment.firebase),
          FlexLayoutModule,
          MaterialModule,
          BrowserAnimationsModule,
          HttpClientModule,
          InputModule,
          DisplayModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
