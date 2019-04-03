import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from './quiz/quiz.module';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFirestoreModule,
		AngularFireModule.initializeApp(environment.firebase),
		QuizModule,
		MaterialModule,
		BrowserAnimationsModule,
	],
	exports: [MaterialModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
