import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { MainComponent } from './main.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphicsComponent,
    MainComponent,
    ProgressComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, PagesRoutingModule],
  exports: [
    DashboardComponent,
    GraphicsComponent,
    MainComponent,
    ProgressComponent,
  ],
})
export class PagesModule {}
