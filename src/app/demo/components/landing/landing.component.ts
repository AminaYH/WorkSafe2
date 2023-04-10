import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/core/layout/service/app.layout.service';
interface cities {

    name: string,
    code: string
}
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    cities: cities[]=[];
    selectedCities?: cities[];

    constructor(public layoutService: LayoutService, public router: Router) { }




}
