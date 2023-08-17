import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpacesWithDash'
})
export class ReplaceSpacesWithDashPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
