import { Component, Input } from '@angular/core';

import { Product } from '../../models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;

  toggleFavourite(product) {
    product.Favourite = !product.Favourite;
  }

}
