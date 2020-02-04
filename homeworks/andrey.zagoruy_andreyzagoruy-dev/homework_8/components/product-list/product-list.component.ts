import { Component, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  @Input() products: Product[];
  @Input() productsAll: Product[];

}
