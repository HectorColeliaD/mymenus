import { Component, input } from '@angular/core';

@Component({
  selector: 'app-productslist',
  imports: [],
  templateUrl: './productslist.html',
  styleUrl: './productslist.scss'
})
export class Productslist {
  productsList = input.required<{burger:string, price:number}[]>();
}
