import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly http = inject(HttpClient);
  readonly #API = 'https://fakestoreapi.com';
  readonly $products = toSignal(this.http.get<Array<Product>>(`${this.#API}/products`));
  readonly $discount = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(
      map((params) => params.get('discount')),
    ),
  );
}
