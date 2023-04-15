import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/shared/service/country.service';

@Component({
    templateUrl: './inputdemo.component.html'
})
export class InputDemoComponent implements OnInit {

    countries: any[] = [];

    filteredCountries: any[] = [];

    selectedCountryAdvanced: any[] = [];

    valSlider = 50;

    valColor = '#424242';

    valRadio: string = '';

    valCheck: string[] = [];

    valCheck2: boolean = false;

    valSwitch: boolean = false;

    cities: SelectItem[] = [];

    selectedList: SelectItem = { value: '' };

    selectedDrop: SelectItem = { value: '' };

    selectedMulti: any[] = [];

    valToggle = false;

    paymentOptions: any[] = [];

    valSelect1: string = "";

    valSelect2: string = "";

    valueKnob = 20;

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });

        this.cities = [
            { label: 'New York', value: { id: 1, type: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, type: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, type: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, type: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, type: 'Paris', code: 'PRS' } }
        ];

        this.paymentOptions = [
            { type: 'Option 1', value: 1 },
            { type: 'Option 2', value: 2 },
            { type: 'Option 3', value: 3 }
        ];
    }

    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}
