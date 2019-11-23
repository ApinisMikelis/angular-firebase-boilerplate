import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPageComponent } from './input/containers/input.page';
import { DisplayPageComponent } from './display/containers/display.page';

const routes: Routes = [
     {
          path: 'input',
          component: InputPageComponent,
     },
     {
          path: 'display',
          component: DisplayPageComponent,
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
