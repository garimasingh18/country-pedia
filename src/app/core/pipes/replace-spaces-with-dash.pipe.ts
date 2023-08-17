import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpacesWithDash',
})
export class ReplaceSpacesWithDashPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    return value?.replace(/\s+/g, '-');
  }
}
