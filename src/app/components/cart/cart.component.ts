import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartProducts: Product[];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.cartProducts = this.userService.getCart();
  }

  removeFromCart(item: Product) {
    console.log("Removing " + item.name);
    this.userService.removeItem(item);
    this.cartProducts = this.userService.getCart();
  }

  detail(product: Product) {
    localStorage.setItem("currentProduct", JSON.stringify(product));
    this.router.navigate(["/product", product.id]);
  }
}
