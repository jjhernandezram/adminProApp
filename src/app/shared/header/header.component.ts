import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof ActivationEnd)
        // filter((event) => event.snapshot.firstChild === null)
      )
      .subscribe((event) => {
        console.log(event);
      });
  }

  ngOnInit(): void {}
}
