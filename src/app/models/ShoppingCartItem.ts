import { Product } from "./Product"

export class ShoppingCartItem {
    public get quantity(): number {
        return this._quantity
    }
    public set quantity(value: number) {
        this._quantity = value
    }


    constructor(readonly itemProduct: Product, private _quantity: number = 1) {

    }

    public addProduct(shoppingCartItem: ShoppingCartItem) {
        if (this.itemProduct.productID == shoppingCartItem.itemProduct.productID) {
            this.quantity += shoppingCartItem.quantity
        }

    }

    public subtractProduct(shoppingCartItem: ShoppingCartItem) {
        if (this.itemProduct.productID == shoppingCartItem.itemProduct.productID) {
            this.quantity -= shoppingCartItem.quantity
        }
    }

    public displayProduct() {
        return "Title: " + this.itemProduct.productTitle + ", quantity: " + this.quantity
    }
}

