import { Component } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: [],
})
export class GraphicsComponent {
  labelsGraphicA = ['Download', 'In-Store', 'Mail-Order'];
  dataGraphicA = [[350, 450, 100]];

  labelsGraphicB = ['Products', 'Services', 'Brands'];
  dataGraphicB = [[110, 400, 250]];
}
