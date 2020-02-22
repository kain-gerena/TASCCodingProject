import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class receiptService{
  total = 0;
  salesTax= 0;
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    var iterator;
    var price;
    var tax;
    var quantity;
    var priceWithTax = 0;

    for (iterator in this.items){

      price=this.items[iterator].price;
      quantity=this.items[iterator].quantity;
      priceWithTax=(price * 1);
      if(this.items[iterator].imported){
        tax=(price * .05);
        console.log(tax);
        tax=this.roundTax(tax);
        console.log(tax);
        this.salesTax=this.salesTax+tax;
        priceWithTax=priceWithTax+tax;
      }
      if (!this.items[iterator].exempt){
        tax=(price * .1);
        console.log(tax);
        tax=this.roundTax(tax);
        console.log(tax);
        this.salesTax=this.salesTax+tax;
        priceWithTax=priceWithTax+tax;
      }
      this.total=this.total+(priceWithTax*quantity);
      this.items[iterator].price=(priceWithTax*quantity);
      price=0;
    }
    return this.items;
  }
  getTotal() {
    return this.total;
  }
  getSalesTax(){
    return this.salesTax;
  }
  roundTax(currentTax){
    var newTax=Math.round(currentTax*100);
    console.log('New Tax: ', newTax);
    var modular=newTax%10;
    console.log('Modular', modular.toFixed());
    if( (modular == 0) || (modular == 1) || (modular == 2)){
      newTax=(newTax-modular);
      console.log('Less than 5' , newTax);
    }
    else if(modular == 3 || modular == 4 || modular == 5 || modular == 6 || modular == 7 ){
      newTax=((newTax-modular) + 5);
      console.log('Around five', newTax);
    }
    else{
      newTax=((newTax-modular)+10);
      console.log('8 or more', newTax);
    }
    return (newTax/100);
  }

  clearItems() {
     this.items = [];
     this.total = 0;
     this.salesTax = 0;
     return this.items;
   }

}
