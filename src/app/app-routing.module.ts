import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';


const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' }
  , { path: '', component: ProductComponent }
  , { path: 'order', component: OrdersComponent }
  , { path: 'orderDetails/:id', component: OrdersDetailsComponent }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

