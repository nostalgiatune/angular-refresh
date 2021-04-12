import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  add(product) {
    this.items.push(product);
  }

  get() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items;
  }

  prices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
