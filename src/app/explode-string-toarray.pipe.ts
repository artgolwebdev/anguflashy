import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explodeStringToarray'
})
export class ExplodeStringToarrayPipe implements PipeTransform {

  transform(value: any): string {
    if(typeof value != "undefined"){
      value = String(value).split(",");
    }
    return value;
  }

}
