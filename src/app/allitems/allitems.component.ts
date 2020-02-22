import { Component } from '@angular/core';
import { Item } from '../item';
import {receiptService } from '../receipt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent {
  public receiptList
  public totalValue
  public salesTax
  constructor(
    private receiptservice: receiptService, public router: Router)
    {
    this.receiptList=receiptservice.getItems();
    this.totalValue=receiptservice.getTotal();
    this.salesTax=receiptservice.getSalesTax();
    }
    onReturn(){
    this.receiptservice.clearItems();
    this.router.navigate(['']);
    }

}
