import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from './quiz/quiz.module';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CoreModule } from './core/core.module';

@NgModule({
     declarations: [AppComponent],
     imports: [
          AdminModule,
          AngularFireAuthModule,
          BrowserModule,
          BrowserAnimationsModule,
          CoreModule,
          AppRoutingModule,
          AngularFirestoreModule,
          AngularFireModule.initializeApp(environment.firebase),
          FlexLayoutModule,
          QuizModule,
          MaterialModule,
          BrowserAnimationsModule,
          HttpClientModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
