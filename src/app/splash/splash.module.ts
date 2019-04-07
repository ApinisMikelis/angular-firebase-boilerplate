import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { SplashRoutingModule } from './splash-routing.module';

@NgModule({
     declarations: [StartScreenComponent],
     imports: [CommonModule, MaterialModule, FlexLayoutModule, SplashRoutingModule],
})
export class SplashModule {}
