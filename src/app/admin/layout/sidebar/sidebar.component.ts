// import {Component, ElementRef} from '@angular/core';
// import { LayoutService } from "src/app/admin/layout/service/app.layout.service";
// import {Router} from "@angular/router";
// import {MenuItem} from "primeng/api";
// @Component({
//   selector: 'app-side-bar',
//   templateUrl: './sidebar.component.html',
// })
// export class SidebarComponent {
//
//
//     items: MenuItem[]=[];
//
//     constructor(public LayoutService: LayoutService, public el: ElementRef, public router: Router) { }
//
//     ngOnInit() {
//         this.items = [
//             {
//                 label: 'File',
//                 icon: 'pi pi-fw pi-file',
//                 items: [
//                     {
//                         label: 'New',
//                         icon: 'pi pi-fw pi-plus',
//                         items: [
//                             {
//                                 label: 'Bookmark',
//                                 icon: 'pi pi-fw pi-bookmark'
//                             },
//                             {
//                                 label: 'Video',
//                                 icon: 'pi pi-fw pi-video'
//                             }
//                         ]
//                     },
//                     {
//                         label: 'Delete',
//                         icon: 'pi pi-fw pi-trash'
//                     },
//                     {
//                         separator: true
//                     },
//                     {
//                         label: 'Export',
//                         icon: 'pi pi-fw pi-external-link'
//                     }
//                 ]
//             },
//             {
//                 label: 'Edit',
//                 icon: 'pi pi-fw pi-pencil',
//                 items: [
//                     {
//                         label: 'Left',
//                         icon: 'pi pi-fw pi-align-left'
//                     },
//                     {
//                         label: 'Right',
//                         icon: 'pi pi-fw pi-align-right'
//                     },
//                     {
//                         label: 'Center',
//                         icon: 'pi pi-fw pi-align-center'
//                     },
//                     {
//                         label: 'Justify',
//                         icon: 'pi pi-fw pi-align-justify'
//                     }
//                 ]
//             },
//             {
//                 label: 'Users',
//                 icon: 'pi pi-fw pi-user',
//                 items: [
//                     {
//                         label: 'New',
//                         icon: 'pi pi-fw pi-user-plus'
//                     },
//                     {
//                         label: 'Delete',
//                         icon: 'pi pi-fw pi-user-minus'
//                     },
//
//                 ]
//             },
//             {
//                 label: 'Events',
//                 icon: 'pi pi-fw pi-calendar',
//                 items: [
//                     {
//                         label: 'Archieve',
//                         icon: 'pi pi-fw pi-calendar-times',
//                         items: [
//                             {
//                                 label: 'Remove',
//                                 icon: 'pi pi-fw pi-calendar-minus'
//                             }
//                         ]
//                     }
//                 ]
//             },
//
//         ];
//     }
// }
//
