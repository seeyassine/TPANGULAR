"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ShoppingCartItem_1 = require("./ShoppingCartItem");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.itemsProduct = new Array();
        this.total = 0;
    }
    ShoppingCart.prototype.addItem = function (shoppingCartItem) {
        var elem = this.itemsProduct.find(function (x) { return x.itemProduct.productID == shoppingCartItem.itemProduct.productID; });
        if (elem == undefined) {
            this.itemsProduct.push(shoppingCartItem);
        }
        else {
            //let currentShoppingCartItem = this.itemsProduct[index]
            elem.addProduct(shoppingCartItem);
        }
    };
    ShoppingCart.prototype.removeItem = function (shoppingCartItem) {
        var elem = this.itemsProduct.find(function (x) { return x.itemProduct.productID == shoppingCartItem.itemProduct.productID; });
        if (elem != undefined) {
            elem.subtractProduct(shoppingCartItem);
            if (elem.quantity == 0) {
                this.itemsProduct.splice(this.itemsProduct.indexOf(shoppingCartItem), 1);
            }
        }
    };
    ShoppingCart.prototype.getItems = function () {
        for (var index in this.itemsProduct) {
            console.log("\n\n" + this.itemsProduct[index].displayProduct() + "\n");
        }
    };
    return ShoppingCart;
}());
var productOne = new Product_1.Product("REFAZER");
productOne.productTitle = "Tablette SAM 12 Pouce";
productOne.prouctPrice = "2334 DH";
var productTwo = new Product_1.Product("ARRR");
productTwo.productTitle = "IPHONE 14 PRO";
productTwo.prouctPrice = "13000 DH";
var productThree = new Product_1.Product("OOPPP");
productThree.productTitle = "SMART TV 42 P";
productThree.prouctPrice = "4000 DH";
var productFour = new Product_1.Product("REFAZER");
productFour.productTitle = "Tablette SAM 12 Pouce";
productFour.prouctPrice = "2334 DH";
var productFive = new Product_1.Product("ARRR");
productFive.productTitle = "IPHONE 14 PRO";
productFive.prouctPrice = "13000 DH";
var shoppingCartItemOne = new ShoppingCartItem_1.ShoppingCartItem(productOne);
var shoppingCartItemTwo = new ShoppingCartItem_1.ShoppingCartItem(productTwo);
var shoppingCartItemThree = new ShoppingCartItem_1.ShoppingCartItem(productThree);
var shoppingCartItemFour = new ShoppingCartItem_1.ShoppingCartItem(productFour);
var shoppingCartItemFive = new ShoppingCartItem_1.ShoppingCartItem(productFive);
var shoppingCart = new ShoppingCart();
shoppingCart.addItem(shoppingCartItemOne);
shoppingCart.addItem(shoppingCartItemTwo);
shoppingCart.addItem(shoppingCartItemThree);
shoppingCart.addItem(shoppingCartItemFour);
shoppingCart.addItem(shoppingCartItemFive);
console.log(shoppingCart.getItems());
shoppingCart.removeItem(shoppingCartItemFive);
shoppingCart.removeItem(shoppingCartItemThree);
shoppingCart.removeItem(shoppingCartItemFive);
shoppingCart.removeItem(shoppingCartItemFour);
shoppingCart.removeItem(shoppingCartItemFour);
console.log(".....After supression......");
console.log(shoppingCart.getItems());
