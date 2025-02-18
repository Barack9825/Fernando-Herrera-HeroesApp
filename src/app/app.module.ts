import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';

import { ErrorPageComponent } from './shared/error-page/error-page.component';


@NgModule({
  declarations: [AppComponent,ErrorPageComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [
    provideAnimationsAsync() 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
