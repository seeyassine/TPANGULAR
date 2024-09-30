import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './user/signin/signin.component';

export const routes: Routes = [
    
    {path : 'home', component : HomeComponent, title: 'My Home'},
    {path : 'catalog', component : CatalogComponent, title: 'My Catalog products'},
    {path : 'product-details', component : ProductDetailsComponent, title: 'Product details'},
    {path : 'cart', component : CartComponent, title: 'My cart'},
    {path : 'signin', component : SigninComponent, title: 'My signin page'},
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    
    
    

];
