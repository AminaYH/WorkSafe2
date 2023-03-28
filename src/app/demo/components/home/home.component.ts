import { Component } from '@angular/core';
import {LayoutService} from "../../../core/layout/service/app.layout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(public layoutService: LayoutService, public router: Router) { }

}
