import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardPage } from './containers/dashboard/dashboard.page';
import { AdminRoutingModule } from './admin-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportQuestionsComponent } from './components/import/import-questions.component';
import { PapaParseModule } from 'ngx-papaparse';
import { GameListComponent } from './components/game-list/game-list.component';

@NgModule({
     declarations: [DashboardPage, GameListComponent, QuestionsComponent, ImportQuestionsComponent],
     imports: [AdminRoutingModule, CommonModule, MaterialModule, PapaParseModule, ReactiveFormsModule],
})
export class AdminModule {}
