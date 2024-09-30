import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../models/Product';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  private cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart()
  }

  get cartItems() {
    return this.cart;
  }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  getImageUrl(product: Product){
    return '/assets/images/'+ product.productImage
  }

}
