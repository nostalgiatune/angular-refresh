import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit() {
    const map = this.route.snapshot.paramMap;
    const id = Number(map.get("productId"));
    this.product = products.find(p => p.id == id);
  }

  add(product) {
    this.cart.add(product);
    alert(product);
  }
}
