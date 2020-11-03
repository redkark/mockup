import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/common/cart.service';
import { SessionService } from 'src/app/services/common/session.service';

import { mockTestsMaster } from '../../../../mockdata/mocktests';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mockTestsMaster = mockTestsMaster;

  constructor(
    private cartService: CartService,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
  }

  addToCart(mockTestCode) {
    this.cartService.addToCart(mockTestCode);
    console.log('Added ' +mockTestCode + ' to cart');
  }

  showAlert() {
    window.alert("Please login before adding items to the cart");
  }

}
