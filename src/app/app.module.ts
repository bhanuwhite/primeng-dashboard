import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from 'primeng/knob';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StasticticsComponent } from './stastictics/stastictics.component';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { CategoryComponent } from './category/category.component';
import { SettingsComponent } from './settings/settings.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { Data2Component } from './data2/data2.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsComponent } from './charts/charts.component';
import { ExploreComponent } from './explore/explore.component';
import { HistoryComponent } from './history/history.component';
import { InputTextModule } from 'primeng/inputtext';
import { PluginsComponent } from './plugins/plugins.component';





@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    DashboardComponent,
    ProductsComponent,
    StasticticsComponent,
    CategoryComponent,
    SettingsComponent,
    Data2Component,
    AnalyticsComponent,
    ChartsComponent,
    ExploreComponent,
    HistoryComponent,
    PluginsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    FormsModule,
    BadgeModule,
    CardModule,
    ChartModule,
    TabViewModule,
    TriStateCheckboxModule,
    ReactiveFormsModule,
    TagModule,
    PanelModule,
    KnobModule,
    CalendarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
