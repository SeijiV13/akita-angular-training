import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes
  ]
})
export class HomeModule { }
