import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ProductLayoutComponent } from './layouts/product-layout/product-layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'products', component: ProductLayoutComponent, children: [
    {path: '', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: 'categories', component: CategoriesComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
