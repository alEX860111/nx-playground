import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../../../../libs/catalog/feature-browse-products/src/lib/catalog-feature-browse-products.module').then(mod => mod.CatalogFeatureBrowseProductsModule),
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
