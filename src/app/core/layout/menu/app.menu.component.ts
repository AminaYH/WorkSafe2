import { OnInit ,Input} from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import {MenuItem} from "primeng/api";
export const MENU_ITEMS: MenuItem[] = [
    {
        label: 'Home',visible:false,
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] ,  } ,]
    },
    {label: 'UI Components',visible:false,
        items: [
            { label: 'Form Layout' , icon: 'pi pi-fw pi-id-card ', routerLink: ['/uikit/formlayout'],visible:false},
            { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] ,visible:false      },
            { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] ,visible:false      },
            { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] ,visible:false      },
            { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] ,visible:false      },
            { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] ,visible:false      },
            { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] ,visible:false      },
            { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'],visible:false       },
            { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] ,visible:false      },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] ,visible:false      },
            { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] ,visible:false      },
            { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } ,visible:false      },
            { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']   ,visible:false     },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] ,visible:false },
            { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] , visible:false
            }]},
    {
        label: 'Pages',visible:false,
        icon: 'pi pi-fw pi-briefcase',
        items: [

            {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',visible:false,
                items: [
                    {
                        label: 'Register',
                        icon: 'pi pi-fw pi-sign-up',
                        routerLink: ['/auth/register'],visible:false
                    },
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/auth/login'],
                        styleClass: 'my-menu-item',visible:false
                    },

                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['/auth/error'] ,visible:false
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/auth/access'],visible:false
                    }
                ]
            },
            {
                label: 'Crud',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud']
                ,visible:false
            },
            {
                label: 'Timeline',
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/pages/timeline']
                ,visible:false
            },
            {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/notfound']
                ,visible:false
            },
            {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['/pages/empty']
                ,visible:false
            },
        ]
    },

    {
        label: 'WorkSafe',visible:false,
        items: [
            {
                label: 'WorkSpace', icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'Teams', icon: 'pi pi-fw pi-team' ,  },
                    { label: 'solo', icon: 'pi pi-fw pi-user',  },

                ]
            },



        ]
    },
];
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
        this.model = MENU_ITEMS;

    }
}
