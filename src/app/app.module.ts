import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ExampleComponent } from './example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HighlightDirective, ExampleComponent],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, RouterModule.forRoot([]), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
