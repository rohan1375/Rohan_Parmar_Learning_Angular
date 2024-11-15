import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../Shared/Model/User";

@Pipe({
  name: 'characterPower',
  standalone: true
})
export class CharacterPowerPipe implements PipeTransform {

  transform(user: User): string {
    return `${user.CharacterName} ${user.power}`;
  }

}
