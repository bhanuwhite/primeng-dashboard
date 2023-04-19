import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsComponent } from './charts/charts.component';
import { ExploreComponent } from './explore/explore.component';
import { HistoryComponent } from './history/history.component';
import { Data2Component } from './data2/data2.component';
import { PluginsComponent } from './plugins/plugins.component';

const routes: Routes = [
  {
    path: '', component: SidenavbarComponent,
    children: [

      {
        path: '', component: DashboardComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'category', component: CategoryComponent     

      },
      {
        path: 'data2', component: Data2Component    
      },
      {
        path: 'analytics', component: AnalyticsComponent
      },
      {
        path: 'plugins', component: PluginsComponent
      },
      {
        path: 'charts', component: ChartsComponent
      },
      {
        path: 'explore', component: ExploreComponent
      },
      {
        path: 'history', component: HistoryComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },



    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
