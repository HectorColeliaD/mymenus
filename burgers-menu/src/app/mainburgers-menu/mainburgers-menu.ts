import { Component } from '@angular/core';
import { App } from "../app";
import { Mburgers } from "./mburgers/mburgers";

@Component({
  selector: 'app-mainburgers-menu',
  imports: [Mburgers],
  templateUrl: './mainburgers-menu.html',
  styleUrl: './mainburgers-menu.scss'
})
export class MainburgersMenu {

}
