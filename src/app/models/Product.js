"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productID) {
        this.productID = productID;
    }
    Object.defineProperty(Product.prototype, "productTitle", {
        get: function () {
            return this._productTitle;
        },
        set: function (value) {
            this._productTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "prouctPrice", {
        get: function () {
            return this._prouctPrice;
        },
        set: function (value) {
            this._prouctPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.printProduct = function () {
        return "productID:" + this.productID + ", productTitle: " + this.productTitle + ", prouctPrice: " + this.prouctPrice;
    };
    return Product;
}());
exports.Product = Product;
var product = new Product("REFAZER");
product.productTitle = "Tablette SAM 12 Pouce";
product.prouctPrice = "2334 DH";
console.log(product.printProduct());
