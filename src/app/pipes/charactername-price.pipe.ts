import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characternamePrice',
  standalone: true
})
export class CharacternamePricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
