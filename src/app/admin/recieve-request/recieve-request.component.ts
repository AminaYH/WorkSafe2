import { Component } from '@angular/core';
import {LeaveRequestService} from "../../shared/service/LeaveRequest.service";
import {LayoutService} from "../../employee/layout/service/app.layout.service";
import {LeaveRequest} from "../../shared/api/LeaveRequest";

@Component({
  selector: 'app-recieve-request',
  templateUrl: './recieve-request.component.html',
})
export class RecieveRequestComponent {
    data: any;
    options: any;
    leaveRequest!: LeaveRequest[];
    constructor(private leaveRequestService:LeaveRequestService, public layoutService: LayoutService) {

    }

    ngOnInit() {
        this.leaveRequestService.getAllLeaveRequest().subscribe(
            data =>{ this.leaveRequest = data;
        console.log(data)
            });
    }
    }
