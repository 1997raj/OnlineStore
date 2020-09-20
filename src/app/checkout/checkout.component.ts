import { Component, OnInit } from '@angular/core';
import {Order} from 'src/Model/order.model';
import {OrderRepository} from 'src/Model/order.repository';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls : ['checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent : boolean = false;
  submitted : boolean = false;
  constructor(public order: Order, public repository: OrderRepository) { }

  ngOnInit(): void {
  }

  submitOrder(form : NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      
      this.repository.saveOrder(this.order)
      .subscribe(order =>
        {
          this.order.clear();
          this.orderSent=true;
          this.submitted=false;
        })
    }
  }

}
