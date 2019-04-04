import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardPage } from './containers/dashboard/dashboard.page';
import { AdminRoutingModule } from './admin-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
     declarations: [DashboardPage, QuestionsComponent],
     imports: [AdminRoutingModule, CommonModule, MaterialModule, ReactiveFormsModule],
})
export class AdminModule {}
