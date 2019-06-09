import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CatalogFeatureBrowseProductsRoutingModule } from './catalog-feature-browse-products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [CommonModule, CatalogFeatureBrowseProductsRoutingModule],
  declarations: [ProductListComponent, ProductDetailsComponent]
})
export class CatalogFeatureBrowseProductsModule {}
