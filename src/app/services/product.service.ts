import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProductsList() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }


  
}
