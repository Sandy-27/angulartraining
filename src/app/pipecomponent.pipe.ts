import { Pipe, PipeTransform } from '@angular/core';
import { repeat } from 'rxjs';

@Pipe({
  name: 'pipecomponent'
})
export class PipecomponentPipe implements PipeTransform {

  transform(value: string, count: number): string {
    // var a = "";
    // for (let i = 1; i <= count; i++) {
    //   a = a + value;
    // }
    // return a;
   return value.repeat(count);
}

}
