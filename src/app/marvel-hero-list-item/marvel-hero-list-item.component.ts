import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-marvel-hero-list-item',
  standalone: true,
  imports: [],
  templateUrl: './marvel-hero-list-item.component.html',
  styleUrl: './marvel-hero-list-item.component.css'
})
export class MarvelHeroListItemComponent {
@Input() MarvelComics:any;
}
