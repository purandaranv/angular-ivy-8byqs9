import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import { Products } from "../model/Products";
import {ProductsService} from "../services/products.service";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.Component.scss']
})

export class ProductListComponent implements OnInit{
    constructor(private proservice: ProductsService) { }

    @Input() myinput?: string;

    @Output()
    myoutput: EventEmitter<string>=new EventEmitter();
    outputvar?:string="Sending data from child to parent";

    senddata():void{
      this.myoutput.emit(this.outputvar);
    }
 
    ngOnInit(): void {
    }

    listproducts=this.proservice.getProductData();
    
    showtitle: boolean=true;
    showhidetitle(){
      return this.showtitle=!this.showtitle;
    }

    refresh() {
      this.listproducts=this.proservice.getrefresh();
    }

    trackById(index: number, pro: Products): number {
      return pro.id;
      }

}