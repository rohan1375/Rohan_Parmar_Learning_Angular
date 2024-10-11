import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {User} from "./Shared/Model/User";
import {MarvelHeroListComponent} from "./marvel-hero-list/marvel-hero-list.component";
import {MarvelHeroListItemComponent} from "./marvel-hero-list-item/marvel-hero-list-item.component";
import {UserService} from "./Services/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, MarvelHeroListComponent, MarvelHeroListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marvel Comics';
  displayColumns:string[] = ['CharacterName', 'power', 'weapons', 'age', 'iscanfly']
  MarvelComics:User[]=[];

  constructor(private userService:UserService) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:(data:User[])=> this.MarvelComics = data,
      error: err => console.log("Fetching Error",err),
      complete:() => console.log("data fetched"),
    })
  }
}
