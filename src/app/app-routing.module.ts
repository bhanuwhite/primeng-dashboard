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
import { Data3Component } from './data3/data3.component';
import { Data4Component } from './data4/data4.component';
import { Data5Component } from './data5/data5.component';
import { Data6Component } from './data6/data6.component';
import { Data7Component } from './data7/data7.component';

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
        path: 'data3', component: Data3Component    
      },
      {
        path: 'data4', component: Data4Component    
      },
      {
        path: 'data5', component: Data5Component    
      },
      {
        path: 'data6', component: Data6Component    
      },
      {
        path: 'data7', component: Data7Component    
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
