export class Product {
    private _productTitle!: String;
    public get productTitle(): String {
        return this._productTitle;
    }
    public set productTitle(value: String) {
        this._productTitle = value;
    }
    private _prouctPrice!: String;
    public get prouctPrice(): String {
        return this._prouctPrice;
    }
    public set prouctPrice(value: String) {
        this._prouctPrice = value;
    }

    private _productImage: String ="";
    public get productImage(): String {
        return this._productImage;
    }
    public set productImage(value: String) {
        this._productImage = value;
    }

    private _category: String = "";
    public get category(): String {
        return this._category;
    }
    public set category(value: String) {
        this._category = value;
    }

    constructor(readonly productID: String){

    }

    
    public printProduct(): String{
        return "productID:" +this.productID +", productTitle: "+this.productTitle + ", prouctPrice: " + this.prouctPrice
    }
}

let product = new Product("REFAZER")
product.productTitle = "Tablette SAM 12 Pouce"
product.prouctPrice = "2334 DH"


console.log(product.printProduct())