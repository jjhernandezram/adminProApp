import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('inputValue') progress: number = 80;
  @Input() btnClass: string = 'btn-primary';

  @Output('outputValue') valueEmitter: EventEmitter<number> =
    new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.valueEmitter.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      this.valueEmitter.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + value;
    this.valueEmitter.emit(this.progress);
    return;
  }

  onChange(value: number) {
    if (value > 100) {
      this.progress = 100;
    } else if (value < 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.valueEmitter.emit(this.progress);
  }
}
