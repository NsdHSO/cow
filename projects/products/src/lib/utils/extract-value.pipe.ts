import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'extractValue'
})
export class ExtractValuePipe implements PipeTransform {
  transform(value : any, ...args : any[]) : any {
    if(value[args[0]] === false || value[args[0]] === true){
      return !!value[args[0]]
    }
    return value[args[0]];
  }
}
