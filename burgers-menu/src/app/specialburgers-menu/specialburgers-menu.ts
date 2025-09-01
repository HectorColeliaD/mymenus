import { Component } from '@angular/core';
import { Productslist } from '../productslist/productslist';

@Component({
  selector: 'app-specialburgers-menu',
  imports: [Productslist],
  templateUrl: './specialburgers-menu.html',
  styleUrl: './specialburgers-menu.scss'
})
export class SpecialburgersMenu {

  specialProducts = [
    {burger: "Bacon doble", price: 4200},
    {burger: "Bacon Triple", price: 4200},
    {burger: "Completa", price: 4200},
  ]

}
