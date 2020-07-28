import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncarText'
})
export class TruncarTextPipe implements PipeTransform {

  transform(value: string): string {
    var init = 0;
    var limit = 20;
    var text = "";
    const split = value.length / limit;
    if (split > 1) {
      for (var i = 1; i <= split + 1; i++) {
        text = text + value.substring(init, limit) + " ";
        init = limit;
        limit = limit + limit;
      }
    } else {
      text = value;
    }
    return text;
  }

}
