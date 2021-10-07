// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Third Party Modules
import { ChartsModule } from 'ng2-charts';

// Components
import { IncreaserComponent } from './increaser/increaser.component';
import { ChartDonutComponent } from './chart-donut/chart-donut.component';

@NgModule({
  declarations: [IncreaserComponent, ChartDonutComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncreaserComponent, ChartDonutComponent],
})
export class ComponentsModule {}
