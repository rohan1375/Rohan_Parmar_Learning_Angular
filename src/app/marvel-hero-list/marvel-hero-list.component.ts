import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Model/User";
import {MarvelHeroListItemComponent} from "../marvel-hero-list-item/marvel-hero-list-item.component";
import {CurrencyPipe, NgClass, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {UserService} from "../Services/user.service";
import {Router, RouterLink} from "@angular/router";

import {CharacterPowerPipe} from "../pipes/charactername-power.pipe";
@Component({
  selector: 'app-marvel-hero-list',
  standalone: true,
  imports: [
    NgForOf,
    TitleCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    RouterLink,
    CharacterPowerPipe
  ],
  templateUrl: './marvel-hero-list.component.html',
  styleUrl: './marvel-hero-list.component.css'
})
export class MarvelHeroListComponent {
  MarvelComics:User[]=[];


  constructor(private userService:UserService,private router:Router) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:(data:User[])=> this.MarvelComics = data,
      error: err => console.log("Fetching Error",err),
      complete:() => console.log("data fetched"),
    })
  }
 delete(id:Number):void{
    this.MarvelComics=this.MarvelComics.filter(user => user.id === id);
  }
edit(): void {
    this.router.navigate(['modify-list-item'])
}

}

