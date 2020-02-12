import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product'
import products from '../../constants/products';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {

  public products: Product[] = products;

  public filteredProducts: Product[] = products;

  public sortDirection: number = -1;

  ngOnInit() {
    this.toggleSort('Rating');
  }

  toggleSort(field) {
    this.filteredProducts = this.filteredProducts.sort((a,b) => (a[field] > b[field]) ? 1 * this.sortDirection : ((b[field] > a[field]) ? -1 * this.sortDirection : 0));
    this.sortDirection *= -1;
  }

  search(inputEl) {
    const value = inputEl.value;
    this.filteredProducts = this.products.filter(product => product.Title.toLowerCase().match(value.toLowerCase()));
  }

}
