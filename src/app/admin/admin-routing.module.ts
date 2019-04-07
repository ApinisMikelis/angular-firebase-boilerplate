import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './containers/dashboard/dashboard.page';

const routes: Routes = [
     {
          path: 'admin',
          component: DashboardPage,
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AdminRoutingModule {}