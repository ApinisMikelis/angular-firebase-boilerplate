import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
     declarations: [],
     imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatFormFieldModule, MatInputModule],
     exports: [MatButtonModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
