import { Pipe, PipeTransform } from '@angular/core';
import { counteyNdCodes, users } from '../../users';

@Pipe({
  name: 'countryCode',
  standalone: true,
  pure:true
})
export class CountryCodePipe implements PipeTransform {
  
  transform(value: unknown, ...args: unknown[]): unknown {
    let countryCode =  counteyNdCodes.find(c=> c.country==args).countryCode;
    return  countryCode+" "+ value;
  }

}
