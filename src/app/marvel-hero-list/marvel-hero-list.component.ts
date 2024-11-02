import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Model/User";
import {MarvelHeroListItemComponent} from "../marvel-hero-list-item/marvel-hero-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../Services/user.service";
import {Router} from "@angular/router";
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

