import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/common/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list-table.component.html",
  // templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  // Injecting ProductService
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService
      .getProductList()
      .subscribe(data => (this.products = data)); // Get data by subscribing
  }
}