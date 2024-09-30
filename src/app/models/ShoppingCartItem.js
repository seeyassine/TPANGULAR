"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartItem = void 0;
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(itemProduct, _quantity) {
        if (_quantity === void 0) { _quantity = 1; }
        this.itemProduct = itemProduct;
        this._quantity = _quantity;
    }
    Object.defineProperty(ShoppingCartItem.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCartItem.prototype.addProduct = function (shoppingCartItem) {
        if (this.itemProduct.productID == shoppingCartItem.itemProduct.productID) {
            this.quantity += shoppingCartItem.quantity;
        }
    };
    ShoppingCartItem.prototype.subtractProduct = function (shoppingCartItem) {
        if (this.itemProduct.productID == shoppingCartItem.itemProduct.productID) {
            this.quantity -= shoppingCartItem.quantity;
        }
    };
    ShoppingCartItem.prototype.displayProduct = function () {
        return "Title: " + this.itemProduct.productTitle + ", quantity: " + this.quantity;
    };
    return ShoppingCartItem;
}());
exports.ShoppingCartItem = ShoppingCartItem;
