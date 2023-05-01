import { OnInit ,Input} from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import {MenuItem} from "primeng/api";
export const MENU_ITEMS: MenuItem[] = [];

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls:['./app.menu.component.scss']
})
export class AppMenuComponent implements OnInit {
    @Input() reset?: boolean;

    model: MenuItem[]=[];
    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
    }
}
