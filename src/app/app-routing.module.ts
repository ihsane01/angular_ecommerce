import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './signup/login/login.component';
import { RegisterComponent } from './signup/register/register.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { HasRoleGuard } from './has-role.guard';
import { HomeComponent } from './component/home/home.component';
import { ProductsbycatComponent } from './component/productsbycat/productsbycat.component';
import { ProductComponent } from './product/product.component';
import { UnauthGuard } from './unauth.guard';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { PanierComponent } from './component/panier/panier.component';
import { CommandeComponent } from './component/commande/commande.component';
import { NavadminComponent } from './component/navadmin/navadmin.component';
import { UserComponent } from './component/user/user.component';
const routes: Routes = [

  {path:'Products' ,component:ProductsComponent,canActivate:[AuthGuard,HasRoleGuard],
data:{
  expectedRoles: [1]
} },
  {path:'categories' ,component:CategorieComponent,canActivate:[AuthGuard,HasRoleGuard], },
  {path:'' ,component:HomeComponent,pathMatch: 'full'},
  {path:'admin' ,component:NavadminComponent ,canActivate:[AuthGuard,HasRoleGuard]},
 
 { path:'login', component:LoginComponent,canActivate:[UnauthGuard],},
 { path:'panier', component:PanierComponent,canActivate:[AuthGuard],},
 { path:'commande', component:CommandeComponent,canActivate:[AuthGuard,HasRoleGuard],},
 { path:'users', component:UserComponent,canActivate:[AuthGuard,HasRoleGuard],},
  // {path:'sigup',component:SignupComponent,canActivate:[UnauthGuard],
 { path:'register', component:RegisterComponent,canActivate:[UnauthGuard],},
  
  {path: 'category/:id', component: ProductsbycatComponent},
  {path: 'All', component: AllProductsComponent},
  {path: 'product/:id' , component: ProductComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
