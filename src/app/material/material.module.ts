import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatProgressBarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
     declarations: [],
     imports: [
          CommonModule,
          FlexLayoutModule,
          MatCardModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatProgressBarModule,
     ],
     exports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule],
})
export class MaterialModule {}
