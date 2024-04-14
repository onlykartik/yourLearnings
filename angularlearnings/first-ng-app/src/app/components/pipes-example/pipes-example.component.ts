import { Component } from '@angular/core';
import { users } from '../../../users';
import { TitleCasePipe } from '@angular/common';
import { CountryCodePipe } from '../../pipe/country-code.pipe';

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [TitleCasePipe, CountryCodePipe],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css'
})
export class PipesExampleComponent {

  public listOfUsers = users;
  public listOfCountries = this.listOfUsers.map(val=> val.country);
  constructor(){
  
  }

  onChangeCountryChangeCode(e:any){
    const selectedCountry = e.target.value;
    const selectedName = e.target.id; 


    this.listOfUsers.find((val)=> val.name==selectedName).country = selectedCountry;

  }

}
