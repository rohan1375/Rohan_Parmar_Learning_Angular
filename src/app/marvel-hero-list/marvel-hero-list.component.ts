import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Model/User";
import {MarvelHeroListItemComponent} from "../marvel-hero-list-item/marvel-hero-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../Services/user.service";
import {Router, RouterLink} from "@angular/router";



@Component({
  selector: 'app-marvel-hero-list',
  standalone: true,
  imports: [
    MarvelHeroListItemComponent,
    RouterLink,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './marvel-hero-list.component.html',
  styleUrl: './marvel-hero-list.component.css'
})
export class MarvelHeroListComponent implements OnInit{
  MarvelComics:User[]=[];
  error : string | null = null;

  constructor(private userService:UserService,
              private router:Router) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:(data:User[])=> {
        this.MarvelComics = data;
        this.error = null;
      },
      error:err=>{
        this.error = 'Error fetching user.';
        console.error('Error fetching user.',err);
      },
      complete:()=> console.log("Fetching user complete!.")
    });
  }
 delete(id:Number):void{
    this.MarvelComics=this.MarvelComics.filter(user => user.id === id);
  }
edit(): void {
    this.router.navigate(['modify-list-item'])
}

}


