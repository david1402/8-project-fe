import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./components/customer-layout/customer/customer.component";
import {ShipmentComponent} from "./components/shipment-layout/shipment/shipment.component";
import {CustomerShipmentComponent} from "./components/customer-layout/customer-shipment/customer-shipment.component";


const routes: Routes = [
  {path:'app/customer', component: CustomerComponent},
  {path:'app/shipment', component: ShipmentComponent},
  {path:'app/customer/:customerId/shipments',component: CustomerShipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
