import { Routes } from '@angular/router';
import { MainburgersMenu } from './mainburgers-menu/mainburgers-menu';
import { SpecialburgersMenu } from './specialburgers-menu/specialburgers-menu';
import { Sburgers } from './specialburgers-menu/sburgers/sburgers';

export const routes: Routes = [

    {
        path: '',
        component: SpecialburgersMenu
    }
];
