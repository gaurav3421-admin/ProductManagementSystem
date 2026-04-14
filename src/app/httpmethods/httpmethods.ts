import { Component } from '@angular/core';
import { AddProducthttpmethod } from '../add-producthttpmethod/add-producthttpmethod';  
import { DeleteProducthttpmethod }  from '../delete-producthttpmethod/delete-producthttpmethod';

@Component({
  selector: 'app-httpmethods',
  imports: [AddProducthttpmethod, DeleteProducthttpmethod],
  templateUrl: './httpmethods.html',
  styleUrls: ['./httpmethods.css']  ,
})
export class Httpmethods {

  

}
