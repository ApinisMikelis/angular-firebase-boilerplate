import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatProgressBarModule,
     MatTableModule,
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
          MatTableModule,
     ],
     exports: [
          MatCardModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatProgressBarModule,
          MatTableModule,
     ],
})
export class MaterialModule {}
