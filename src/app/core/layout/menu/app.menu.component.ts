import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls:['./app.menu.component.scss']

})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-hjfhkjfe', routerLink: ['/'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card ', routerLink: ['/uikit/formlayout'],visible:false
                    },
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
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']       },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] ,visible:false },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] ,visible:false}
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'home',
                        icon: 'pi pi-fw pi-home ',
                        routerLink: ['/home']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
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
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            },

            {
                label: 'WorkSafe',
                items: [
                    { label: 'Conversation', icon: 'pi pi-fw pi-id-card ', routerLink: ['/uikit/formlayout']},
                    {
                        label: 'WorkSpace', icon: 'pi pi-fw pi-bookmark',class: 'rotated-icon',
                        items: [
                            { label: 'Teams', icon: 'pi pi-fw pi-team' , },
                            { label: 'solo', icon: 'pi pi-fw pi-user' },
                        ]
                    },

                    { label: 'Calender', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/invalidstate'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/button'] },
                    { label: 'home ', icon: 'pi pi-fw pi-home', routerLink: ['/uikit/table'],style: {'margin-left': '2cm'}},

                ]
            },
        ];
    }
}
