import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MaterialModule } from '../material/material.module';
<<<<<<< HEAD
import { BaseComponent } from './components/base.component';
=======
>>>>>>> 69fda1363b0889aa84800216415d9daa27b3dd43

@NgModule({
     imports: [
          AngularFireModule.initializeApp(environment.firebase),
          BrowserModule,
          FormsModule,
          HttpClientModule,
          MaterialModule,
     ],
<<<<<<< HEAD
     declarations: [BaseComponent],
=======
>>>>>>> 69fda1363b0889aa84800216415d9daa27b3dd43
     providers: [],
})
export class CoreModule {}
