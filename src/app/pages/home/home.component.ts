import { Component, inject } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly router = inject(Router);
  readonly productService = inject(ProductsService);
  $products = this.productService.$products;
  public acceptTerms(value: boolean) {
    if (value) {
      this.router.navigate([ROUTE_TOKENS.ABOUT]);
    }
  }

  protected readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
