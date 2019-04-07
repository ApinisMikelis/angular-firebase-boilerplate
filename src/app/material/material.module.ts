import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatProgressBarModule,
     MatTableModule,
     MatIconModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
     MatCardModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatProgressBarModule,
     MatTableModule,
     MatIconModule,
];

@NgModule({
     declarations: [],
     imports: [...modules, CommonModule, FlexLayoutModule],
     exports: [modules],
})
export class MaterialModule {}
