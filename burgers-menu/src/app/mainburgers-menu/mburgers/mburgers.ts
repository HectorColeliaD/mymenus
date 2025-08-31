import { Component } from '@angular/core';

export interface Burgers {
  id: number,
  burger: string,
  price: number
}

@Component({
  selector: 'app-mburgers',
  imports: [],
  templateUrl: './mburgers.html',
  styleUrl: './mburgers.scss'
})
export class Mburgers {
  burgers: Burgers[] = [
    {id: 1, burger: 'Hamburguesa simple', price: 2200},
    {id: 2, burger: 'Hamburguesa doble', price: 2800},
    {id: 3, burger: 'Cuarto de libra con queso', price: 2500},
    {id: 4, burger: 'Doble cuarto de libra', price: 2200},
    {id: 5, burger: 'Hamburguesa de pollo', price: 2200}
  ]
  
}
