import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStringLength'
  })

export class GetStringLengthPipe implements PipeTransform {

  transform(value:string): unknown {
    return value.toString().length;
  }

}







 
