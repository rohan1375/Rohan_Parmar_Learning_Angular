import {Component, Input} from '@angular/core';
import {User} from"../Shared/Model/User";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-marvel-hero-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './marvel-hero-list-item.component.html',
  styleUrl: './marvel-hero-list-item.component.css'
})
export class MarvelHeroListItemComponent {
@Input() MarvelComics?: User;
}
//
