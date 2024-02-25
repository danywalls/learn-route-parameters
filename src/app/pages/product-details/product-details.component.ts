import {Component, computed, inject, input} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private readonly productService = inject(ProductsService);
  readonly $productSelected = computed(() => {
    return this.productService.$products()?.find(({ id }) => id == this.id());
  });
  id = input<string>('');
  readonly $discount = this.productService.$discount;
}
