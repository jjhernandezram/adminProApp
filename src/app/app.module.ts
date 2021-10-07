import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './404/notfound.component';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
