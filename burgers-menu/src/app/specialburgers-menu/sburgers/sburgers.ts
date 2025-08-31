import { Component } from '@angular/core';
import { Burgers } from '../../mainburgers-menu/mburgers/mburgers';

@Component({
  selector: 'app-sburgers',
  imports: [],
  templateUrl: './sburgers.html',
  styleUrl: './sburgers.scss'
})
export class Sburgers {
  specialBurgers: Burgers[] =  [
    {id:1, burger: "Mega de Cheddar", price: 4200},
    {id:2, burger: "Mega de Cheddar", price: 4200},
    {id:3, burger: "Mega de Cheddar", price: 4200},
  ]
}
