import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/ProductListComponent";
import { ProductsService } from "./services/products.service";
import { ProductPipes } from "./pipe/product.pipe";
import { MydirectiveDirective } from "./directive/mydirective.directive";
import { FormsComponent } from "./forms/forms.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPipes,
    MydirectiveDirective,
    FormsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
