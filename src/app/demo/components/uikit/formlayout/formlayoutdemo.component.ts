import { Component } from '@angular/core';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;

    states: any[] = [
        {type: 'Arizona', code: 'Arizona'},
        {type: 'California', value: 'California'},
        {type: 'Florida', code: 'Florida'},
        {type: 'Ohio', code: 'Ohio'},
        {type: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { type: 'Option 1', code: 'Option 1' },
        { type: 'Option 2', code: 'Option 2' },
        { type: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;

}
