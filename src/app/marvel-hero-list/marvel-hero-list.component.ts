import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Model/User";
import {MarvelHeroListItemComponent} from "../marvel-hero-list-item/marvel-hero-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../Services/user.service";

@Component({
  selector: 'app-marvel-hero-list',
  standalone: true,
  imports: [
    MarvelHeroListItemComponent,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './marvel-hero-list.component.html',
  styleUrl: './marvel-hero-list.component.css'
})
export class MarvelHeroListComponent implements OnInit {
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
  selectedUser?:User;
  selectUser(user:User):void {
    this.selectedUser = user;
  }


}
