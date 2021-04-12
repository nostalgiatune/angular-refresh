import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private cart: CartService, private formBuilder: FormBuilder) {}

  items = this.cart.get();
  form = this.formBuilder.group({
    name: "",
    address: ""
  });

  ngOnInit() {}

  onSubmit() {
    this.items = this.cart.clear();
    console.warn(this.form.value);
    this.form.reset();
  }
}
