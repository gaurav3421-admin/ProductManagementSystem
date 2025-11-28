import { Routes } from '@angular/router';
import { homedir } from 'os';
import { Login } from '../app/login/login';
import { Home } from '../app/home/home';
import { StudentRegistration } from '../app/student-registration/student-registration'
import { TemplateDrivenForm } from '../app/template-driven-form/template-driven-form';
import { ReactiveDrivenForm } from '../app/reactive-driven-form/reactive-driven-form'
import { AddProductDetails } from '../app/add-product-details/add-product-details';
import { ProductDetails } from '../app/product-details/product-details';
import { GetProductDetails } from '../app/get-product-details/get-product-details';
import { Searchproduct } from '../app/searchproduct/searchproduct';
import { Aggridexample } from '../app/aggridexample/aggridexample';
import { ErrorPage } from '../app/error-page/error-page';

export const routes: Routes =
     [
          //{ path: 'productdetails', component: ProductDetails },
          { path: '', component: Login,  pathMatch:'full' }, // default route
          { path: 'login', component: Login },
          { path: 'home', component: Home }, // Step 3
          //{ path: 'home', component: Home, canActivate: [authenticationnewGuard] }, // Step 3
          //{ path: 'home', component: Home, canActivate: [authenticationGuard] }, // Step 3
          //{ path: 'home/productdetailsnew', component: Productdetailsnew,canActivate: [authenticationGuard] },
          //{ path: 'home', component: Home, canActivate: [authenticationGuard] },
          //{ path: 'home', loadComponent: () => import('../app/home/home').then(m => m.Home), canActivate: [authenticationGuard] },
          {
               path: 'home',
               component: Home,
               //loadComponent: () => import('../app/home/home').then(m => m.Home),
               children: [
                    { path: 'studentregistration', component: StudentRegistration },
                    { path: 'templatedrivenform', component: TemplateDrivenForm },
                    { path: 'reactiveform', component: ReactiveDrivenForm },
                    { path: 'addproductdetails', component: AddProductDetails },
                    { path: 'productdetails', component: ProductDetails },
                    { path: 'aggridexample', component: Aggridexample },
                    { path: 'dummyproductdetails', component: GetProductDetails },
                    { path: 'searchproduct', component: Searchproduct },

                    // //{ path: 'productdetailsnew', component: Productdetailsnew,canActivate: [authenticationGuard] },
                    // //{ path: 'addproduct', component: AddproductDetails},
                    // { path: 'addproduct', loadComponent: () => import('../app/addproduct-details/addproduct-details').then(m => m.AddproductDetails) },
                    // { path: 'updateproduct', loadComponent: () => import('../app/updateproduct-details/updateproduct-details').then(m => m.UpdateproductDetails) },
                    // { path: 'deleteproduct', loadComponent: () => import('../app/deleteproduct-details/deleteproduct-details').then(m => m.DeleteproductDetails) },
               ],

          },

          { path: '**', component: ErrorPage }, // Wildcard route for a 404 page


     ];





///{path:'', component:Home}, // default route
//{path:'temptrivenform', component:TemplateDrivenForm},
//{path:'reactiveform', component:ReactiveForm},
//{path:'**', redirectTo:'/reactiveform',pathMatch:'full'} // wildcard route
