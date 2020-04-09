import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {Shipment} from "../../../model/shipment/shipment";

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  shipments: Observable<Shipment[]>;
  currentId: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {

  }

  onCustomerIdChanged(id: number) {
    this.shipments = this.customerService.getCustomerShipments(id);

  }
}
