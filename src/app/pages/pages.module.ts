// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom Modules
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
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
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
    PagesRoutingModule,
  ],
  exports: [
    DashboardComponent,
    GraphicsComponent,
    MainComponent,
    ProgressComponent,
  ],
})
export class PagesModule {}
