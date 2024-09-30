import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private baseUrl = 'http://localhost:3000/api';

  cart: Product[] = []

  constructor(private http: HttpClient) {
    this.http.get<Product[]>(`${this.baseUrl}/cart`).subscribe(cart => {
      this.cart = cart
    })
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product){
    this.cart.push(product)
    this.http.post(`${this.baseUrl}/cart`, this.cart).subscribe(() => {
      console.log("product :" + product.productTitle +" added to cart")
    })
  }

  remove(product: Product) {
    let newCart = this.cart.filter((i) => i !== product);
    this.cart = newCart;
    this.http.post(`${this.baseUrl}/cart`, this.cart).subscribe(() => {
      console.log('removed ' + product.productID + ' from cart!');
    });
  }
}
