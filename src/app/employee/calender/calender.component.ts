import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Message } from 'primeng/api';
import {Leave, LeaveRequest} from 'src/app/shared/api/leave-request.model';
import { LeaveRequestService } from 'src/app/shared/modules/leave-request.service';


@Component({
  selector: 'app-booking',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
visible2: boolean=false;
    visible: boolean=false;
    messages: Message[]=[];
    formGroup!: FormGroup;
    leaveType: Leave[]=[];
position:string='';
    date: Date[]=[];
    selectedDate?: Date;
    leaveRequests: LeaveRequest[]=[];

    constructor(private leaveRequestService: LeaveRequestService) {}



  ngOnInit() {
      this.leaveType = [{ type: 'Vacation', code: 'VAC' },
          { type: 'Sick', code: 'SCK' },
          { type: 'Personal', code: 'PER' },
          { type: 'Bereavement', code: 'BRV' },
          { type: 'Maternity', code: 'MTY' },
          { type: 'Paternity', code: 'PTY' },
          { type: 'Parental', code: 'PRL' },
          { type: 'Jury Duty', code: 'JRY' },
          { type: 'Military', code: 'MLT' },
          { type: 'Unpaid', code: 'UNP' }];
      this.formGroup = new FormGroup({
          selectedCity: new FormControl<Leave | null>(null)
      });
      this.leaveRequestService.getApprovedRequests().subscribe(
          (requests) => {
              this.leaveRequests = requests;
          },
          (error) => {
              console.log('Error getting leave requests:', error);
          }
      );
  }
    showDialog() {
        this.visible = true;
    }
    addMessages() {
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'request send ' }];
  }

    formData = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    };

    submitForm() {
        // Handle form submission here
        console.log(this.formData);
        this.visible = false; // Hide the dialog after submission
    }

    showDialog2(  position:string) {
        this.visible2=true; //show
        this.position=position;
    }
}
