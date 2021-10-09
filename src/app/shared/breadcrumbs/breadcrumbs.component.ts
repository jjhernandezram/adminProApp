import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  title: string = '';
  subscription$!: Subscription;

  constructor(private router: Router) {
    this.subscription$ = this.getPageTitle().subscribe(({ title }) => {
      this.title = title;
      document.title = `Admin Pro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getPageTitle() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event) => event.snapshot.firstChild === null),
      map((event) => event.snapshot.data)
    );
  }
}
