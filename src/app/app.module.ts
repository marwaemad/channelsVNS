import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    OrdersComponent,
    OrdersDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
