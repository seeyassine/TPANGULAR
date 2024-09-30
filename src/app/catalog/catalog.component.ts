import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../cart/cart.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-catalog',
    standalone: true,
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.css',
    imports: [CommonModule, ProductDetailsComponent, RouterLink, RouterLinkActive]
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];
  
  //carts: Product[] = []

  //private cartService: CartService = inject(CartService)

  @Input()
  myValue : string = "";
  filter: string = ""

  constructor(
    private cartService: CartService, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute){  
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
    this.router.navigate(['/cart'])
  }

  
  ngOnInit(): void {
    //this.products = this.cartService.getProducts()
    this.productService.getProductsList().subscribe(products => {
      console.log("ngOnInit products :" +products.toString())
      this.products = products
    })

    //this.filter = this.route.snapshot.params['filter']

    /*this.route.params.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })*/

    this.route.queryParams.subscribe((params)=>{
      this.filter = params['filter'] ?? '';
    })

    //this.products = this.productService.getProducts()
    console.log("child OnInit is called ")
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
        (product: any) => product.category === this.filter
      );
  }
  
}
