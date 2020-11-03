import { Injectable } from '@angular/core';
import { mockTestsMaster } from '../../mockdata/mocktests';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  addToCart(mockTestCode) {
    let mockTest = mockTestsMaster.find(el => el.code === mockTestCode);
    this.items.push(mockTest);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  checkout() {
    //TODO Implement integration with Payment Gateway
    this.items = [];
    return this.items;
  }

}
