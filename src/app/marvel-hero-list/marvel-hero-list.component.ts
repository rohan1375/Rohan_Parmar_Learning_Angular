import {Component} from '@angular/core';
import {User} from "../Shared/Model/User";
import {MarvelHeroListItemComponent} from "../marvel-hero-list-item/marvel-hero-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {UserService} from "../Services/user.service";

@Component({
  selector: 'app-marvel-hero-list',
  standalone: true,
  imports: [
    MarvelHeroListItemComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './marvel-hero-list.component.html',
  styleUrl: './marvel-hero-list.component.css'
})
export class MarvelHeroListComponent{
  MarvelComics:User[]=[];

  constructor(private userService:UserService) {
  }


}
