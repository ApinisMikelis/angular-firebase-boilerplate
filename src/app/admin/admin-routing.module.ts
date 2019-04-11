import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './containers/dashboard/dashboard.page';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
     {
          path: 'admin',
          canActivate: [AuthGuard],
          component: DashboardPage,
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AdminRoutingModule {}
