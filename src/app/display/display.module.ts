import { NgModule } from '@angular/core';
import { DisplayPageComponent } from './containers/display.page';
import { WishComponent } from './components/wish/wish.component';

const COMPONENTS = [DisplayPageComponent, WishComponent];

@NgModule({
     declarations: COMPONENTS,
     imports: [],
     providers: [],
})
export class DisplayModule {}
