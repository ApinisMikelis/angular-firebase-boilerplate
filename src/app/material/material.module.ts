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
     MatDividerModule,
} from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
     MatCardModule,
     MatDividerModule,
     MatButtonModule,
     MaterialFileInputModule,
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
