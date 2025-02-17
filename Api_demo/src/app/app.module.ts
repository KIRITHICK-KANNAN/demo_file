import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './product/component/main/main.component';
import { ListComponent } from './product/component/list/list.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
