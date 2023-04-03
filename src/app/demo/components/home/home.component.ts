import { Component } from '@angular/core';
import {LayoutService} from "../../../core/layout/service/app.layout.service";
import {Router} from "@angular/router";
import { PrimeNGConfig } from 'primeng/api';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
    providers:[ Image]
})
export class HomeComponent {
    constructor(public layoutService: LayoutService, public router: Router) { }

}
