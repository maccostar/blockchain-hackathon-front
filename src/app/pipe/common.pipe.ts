import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToTime'
})
export class CommonPipe implements PipeTransform {

  transform(date: string, args?: any): any {
    date = date.split('T')[1];
    date = date.split('.')[0];
    return date;
  }

}
