import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  FormsModule, CatalogComponent, CartComponent, HeaderComponent, HomeComponent , RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent ngOnChanges is called ")
  }


  title = 'My App';
  myValue : string = "";
  myValues : Array<string> = new Array<string>;

  price : number = 102;

  isChildVisible = false

  ngOnInit(): void {
    console.log("parent OnInit is called ")
  }

  displayChild() {

    this.isChildVisible = !this.isChildVisible

  }

  callAction(){
    this.myValues.push(this.myValue);
    this.myValue = "";
  }

  clearAction(){
    this.myValues.pop()
  }
}
