import { Component } from '@angular/core';
import { Item } from '../item';
import { receiptService } from '../receipt.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent  {
  constructor(public receiptItems: receiptService, public router: Router){}
  ngOnInit(){
  }
  model = new Item ('',0,'',false,false);
  newPurchase: Item;
  finishedWithItems = false;

  onAdd(form: NgForm) {
   this.newPurchase = new Item(form.value.itemName,
     form.value.quantity,
     form.value.price,
     form.value.imported,
     form.value.exempt);
    console.log(this.newPurchase);
    this.receiptItems.addToCart(this.newPurchase);
    this.model = new Item('',1,'',false,false);
  }
  changeToCart(){
    this.router.navigate(['/list']);
  }

}
