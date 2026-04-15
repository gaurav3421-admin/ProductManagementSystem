import { Component } from '@angular/core';
import { AddProducthttpmethod } from '../add-producthttpmethod/add-producthttpmethod';  
import { DeleteProducthttpmethod }  from '../delete-producthttpmethod/delete-producthttpmethod';
import { UpdateProducthttpmethod } from '../update-producthttpmethod/update-producthttpmethod';
import {GetAllProducthttpmethod} from '../get-all-producthttpmethod/get-all-producthttpmethod';

@Component({
  selector: 'app-httpmethods',
  imports: [AddProducthttpmethod, DeleteProducthttpmethod, GetAllProducthttpmethod, UpdateProducthttpmethod],
  templateUrl: './httpmethods.html',
  styleUrls: ['./httpmethods.css'],
})
export class Httpmethods {

  

}
