import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/common/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  checkout() {
    // Redirect to payment gateway
    console.log('Your order has been submitted');
    this.items = this.cartService.clearCart();
  }

}
