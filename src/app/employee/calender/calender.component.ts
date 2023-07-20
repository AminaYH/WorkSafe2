import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Message } from 'primeng/api';
import {Leave, LeaveRequest} from 'src/app/shared/api/LeaveRequest';
import { LeaveRequestService } from 'src/app/shared/service/LeaveRequest.service';


@Component({
  selector: 'app-booking',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
visible2: boolean=false;
    visible: boolean=false;
    messages: Message[]=[];
    leaveType: Leave[]=[];
    date: Date[]=[];
    leaveRequest:LeaveRequest={};
    leaveRequests: LeaveRequest[]=[];
    constructor(private leaveRequestService: LeaveRequestService) {}



  ngOnInit() {
      this.leaveType = [{ type: 'Vacation' },
          { type: 'Sick' },
          { type: 'Personal' },
          { type: 'Bereavement' },
          { type: 'Maternity' },
          { type: 'Paternity' },
          { type: 'Parental' },
          { type: 'Jury Duty' },
          { type: 'Military' },
          { type: 'Unpaid' }];


  }
  sendLeaveRequest(){
    this.leaveRequestService.createLeaveRequest(this.leaveRequest).subscribe(
(requests :any) => {
    this.leaveRequest = requests;
    console.log('leaveRequest',requests);
    this.visible = false;


},


);}
    showDialog() {
        this.visible = true;
    }
    addMessages() {

        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'request send ' }];
  }




    showDialog2(  position:string) {
        this.visible2=true; //show
    }
}
