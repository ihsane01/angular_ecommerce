import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ModalModule } from 'ngx-bootstrap/modal';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './component/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './signup/login/login.component';
import { RegisterComponent } from './signup/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { ProductsbycatComponent } from './component/productsbycat/productsbycat.component';
import { ProductComponent } from './product/product.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommentComponent } from './components/comment/comment.component';
import { HasRoleGuard } from './has-role.guard';
import {MatIconModule} from '@angular/material/icon';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { CatNavComponent } from './component/cat-nav/cat-nav.component';
import { PanierComponent } from './component/panier/panier.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { ToastrModule } from 'ngx-toastr';
import { CommandeComponent } from './component/commande/commande.component';
import { NavadminComponent } from './component/navadmin/navadmin.component';
import { UserComponent } from './component/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    SignupComponent,
    HomeComponent,
    CategorieComponent,
    ProductsbycatComponent,
    ProductComponent,
    CommentComponent,
    AllProductsComponent,
    CatNavComponent,
    PanierComponent,
    CommandeComponent,
    NavadminComponent,
    UserComponent,
    
    
  ],
  imports: [
    
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes),
    RouterModule,
    BrowserAnimationsModule,//pour generer les rote d'acces a notre app angular
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true,

    }), 
    MatButtonModule,
    MatBadgeModule,
    NgbModule,
    MatDividerModule
  ],
  providers: [DataService,AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true

  },HasRoleGuard,
],



  
  bootstrap: [AppComponent]
})
export class AppModule { }
