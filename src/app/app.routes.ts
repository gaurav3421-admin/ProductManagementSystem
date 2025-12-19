import { Routes } from '@angular/router';
import { homedir } from 'os';
import { Login } from '../app/login/login';
import { Home } from '../app/home/home';
import { StudentRegistration } from '../app/student-registration/student-registration'
import { TemplateDrivenForm } from '../app/template-driven-form/template-driven-form';
import { ReactiveDrivenForm } from '../app/reactive-driven-form/reactive-driven-form'
import { AddProductDetails } from '../app/add-product-details/add-product-details';
import { UpdateProductDetails } from '../app/update-product-details/update-product-details';
import { DeleteProductDetails } from '../app/delete-product-details/delete-product-details';
import { ProductDetails } from '../app/product-details/product-details';
import { GetProductDetails } from '../app/get-product-details/get-product-details';
import { Searchproduct } from '../app/searchproduct/searchproduct';
import { DataTypes } from '../app/data-types/data-types';
import { Pipes } from '../app/pipes/pipes';
import { DataBinding } from '../app/data-binding/data-binding';
import { Directives } from '../app/directives/directives';
import { Dashboard } from '../app/dashboard/dashboard'
import { Aggridexample } from '../app/aggridexample/aggridexample';
import { AdvanceTopics } from '../app/advance-topics/advance-topics';
import { ErrorPage } from '../app/error-page/error-page';

export const routes: Routes =
     [
          //{ path: 'productdetails', component: ProductDetails },
          { path: '', component: Login, pathMatch: 'full' }, // default route
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
                    { path: 'dashboard', component: Dashboard },
                    { path: 'studentregistration', component: StudentRegistration },
                    { path: 'templatedrivenform', component: TemplateDrivenForm },
                    { path: 'reactiveform', component: ReactiveDrivenForm },
                    { path: 'addproductdetails', component: AddProductDetails },
                    { path: 'updateproductdetails', component: UpdateProductDetails },
                    { path: 'deleteproductdetails', component: DeleteProductDetails },
                    { path: 'productdetails', component: ProductDetails },
                    { path: 'aggridexample', component: Aggridexample },
                    { path: 'dummyproductdetails', component: GetProductDetails },
                    { path: 'searchproduct', component: Searchproduct },
                    { path: 'datatypes', component: DataTypes },
                    { path: 'dataBinding', component: DataBinding },
                    { path: 'directives', component: Directives },
                    { path: 'angularpipes', component: Pipes },
                    { path: 'advancedtopics', component: AdvanceTopics },
                    
                    // Alternative lazy loading approach
                    //  { path: 'dashboard', loadComponent: () => import('../app/dashboard/dashboard').then(m => m.Dashboard) },
                    //  { path: 'studentregistration', loadComponent: () => import('../app/student-registration/student-registration').then(m => m.StudentRegistration) },
                    //  { path: 'templatedrivenform', loadComponent: () => import('../app/template-driven-form/template-driven-form').then(m => m.TemplateDrivenForm) },
                    //  { path: 'reactiveform', loadComponent: () => import('../app/reactive-driven-form/reactive-driven-form').then(m => m.ReactiveDrivenForm) },
                    //  { path: 'addproductdetails', loadComponent: () => import('../app/add-product-details/add-product-details').then(m => m.AddProductDetails) },
                    //  { path: 'updateproductdetails', loadComponent: () => import('../app/update-product-details/update-product-details').then(m => m.UpdateProductDetails) },
                    //  { path: 'deleteproductdetails', loadComponent: () => import('../app/delete-product-details/delete-product-details').then(m => m.DeleteProductDetails) },
                    //  { path: 'productdetails', loadComponent: () => import('../app/product-details/product-details').then(m => m.ProductDetails) },
                    //  { path: 'aggridexample', loadComponent: () => import('../app/aggridexample/aggridexample').then(m => m.Aggridexample) },
                    //  { path: 'dummyproductdetails', loadComponent: () => import('../app/get-product-details/get-product-details').then(m => m.GetProductDetails) },
                    //  { path: 'searchproduct', loadComponent: () => import('../app/searchproduct/searchproduct').then(m => m.Searchproduct) },
                    //  { path: 'datatypes', loadComponent: () => import('../app/data-types/data-types').then(m => m.DataTypes) },
                    //  { path: 'dataBinding', loadComponent: () => import('../app/data-binding/data-binding').then(m => m.DataBinding) },
                    //  { path: 'directives', loadComponent: () => import('../app/directives/directives').then(m => m.Directives) },
                    //  { path: 'angularpipes', loadComponent: () => import('../app/pipes/pipes').then(m => m.Pipes) },

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
