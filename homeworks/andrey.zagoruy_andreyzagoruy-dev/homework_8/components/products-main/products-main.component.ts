import { Component, OnInit } from '@angular/core';
import products from '../../constants/products';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {

  public products = products;

  public filteredProducts = products;

  public sortDirection = -1;

  ngOnInit() {
    this.toggleSort('Rating');
  }

  toggleSort(field) {
    this.filteredProducts = this.filteredProducts.sort((a,b) => (a[field] > b[field]) ? 1 * this.sortDirection : ((b[field] > a[field]) ? -1 * this.sortDirection : 0));
    this.sortDirection *= -1;
  }

  search(value) {
    this.filteredProducts = this.products.filter(product => product.Title.toLowerCase().match(value.toLowerCase()));
  }

}
