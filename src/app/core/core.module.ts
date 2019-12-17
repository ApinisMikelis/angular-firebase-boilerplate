import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MaterialModule } from '../material/material.module';
import { BaseComponent } from './components/base.component';

@NgModule({
     imports: [
          AngularFireModule.initializeApp(environment.firebase),
          BrowserModule,
          FormsModule,
          HttpClientModule,
          MaterialModule,
     ],
     declarations: [BaseComponent],
     providers: [],
})
export class CoreModule {}
