import {Component, Input, OnInit} from '@angular/core';
import {User} from"../Shared/Model/User";
import {CurrencyPipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../Services/user.service";
import {CharacterPowerPipe} from "../pipes/charactername-power.pipe";
import {MatCardModule} from "@angular/material/card";
@Component({
  selector: 'app-marvel-hero-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CurrencyPipe,
    TitleCasePipe,
    UpperCasePipe,
    CharacterPowerPipe,
    MatCardModule
  ],
  templateUrl: './marvel-hero-list-item.component.html',
  styleUrl: './marvel-hero-list-item.component.css'
})
export class MarvelHeroListItemComponent implements OnInit{
  MarvelComics: User | undefined;
  marvel: User[]=[];
  currentIndex: number=0;

  constructor(private  route: ActivatedRoute,
              private userService:UserService,
              private router: Router) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(user =>{
      this.marvel=user;
      this.route.paramMap.subscribe(params =>{
        const id =Number(params.get('id'));
        if(id){
          this.currentIndex = this.marvel.findIndex(user=> user.id ===id);
          this.MarvelComics = this.marvel[this.currentIndex];
        }
      });
    });
  }

}
