import { Injectable } from '@angular/core';
import {Products} from '../model/Products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  private listProducts: Products[] = [
    {"id":1, "name":"NikilSoft"},  
    {"id":2, "name":"HaneeshSoft"}
  ];

  private newlistProducts: Products[] = [
    {"id":1, "name":"NikilSoft"},  
    {"id":2, "name":"HaneeshSoft"},
    {"id":3, "name":"Wellsoft"},
    {"id":4, "name":"KickSoft"}
  ];

getProductData(): Products[] {
  return this.listProducts;
}

getrefresh(): Products[] {
  return this.newlistProducts;
}

}
