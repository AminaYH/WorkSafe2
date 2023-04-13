import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Message } from 'primeng/api';

interface Leave {
    type: string;
    code: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  constructor() { }
    visible: boolean=false;
    messages: Message[]=[];
    formGroup!: FormGroup;
    leaveType: Leave[]=[];


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

}
