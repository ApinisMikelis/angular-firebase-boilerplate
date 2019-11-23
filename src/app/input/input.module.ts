import { NgModule } from '@angular/core';
import { InputPageComponent } from './containers/input.page';
import { WishInputComponent } from './components/wish-input/wish-input.component';

const COMPONENTS = [InputPageComponent, WishInputComponent];

@NgModule({
     declarations: COMPONENTS,
     imports: [],
     providers: [],
})
export class InputModule {}
