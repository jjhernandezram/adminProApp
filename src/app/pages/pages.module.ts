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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphicsComponent,
    MainComponent,
    ProgressComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
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
    AccountSettingsComponent,
  ],
})
export class PagesModule {}
