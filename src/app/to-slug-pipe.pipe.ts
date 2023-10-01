import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSlug'
})
export class ToSlugPipePipe implements PipeTransform {

  transform(value: string): string {
    
    if(typeof value != "undefined"){
      // Convert the string to lowercase.
      value = value.toLowerCase();

      // Remove all non-alphanumeric characters and spaces.
      value = value.replace(/[^a-z0-9\s-]/g, '');

      // Replace all spaces with hyphens.
      value = value.replace(/\s+/g, '-');

      // Remove any trailing hyphens.
      value = value.replace(/^-|-$/g, '');
    }

    return value;
  }

}
