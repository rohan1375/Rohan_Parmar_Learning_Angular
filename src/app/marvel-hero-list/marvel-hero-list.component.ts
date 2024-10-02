import { Component } from '@angular/core';
import {User} from "../Shared/Model/User";
import {MarvelHeroListItemComponent} from "../marvel-hero-list-item/marvel-hero-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

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
export class MarvelHeroListComponent {
  title = 'Marvel Comics';



}
