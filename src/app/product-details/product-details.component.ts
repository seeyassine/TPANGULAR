import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() product!: Product;

  @Output() buy = new EventEmitter()

  getImageUrl(product: Product){
    return '/assets/images/'+ product.productImage
  }

  byButtonClicked(product: Product){
    this.buy.emit()

  }
}
