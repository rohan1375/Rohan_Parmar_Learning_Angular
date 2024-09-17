import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {MarvelComics} from "./Shared/Model/MarvelComics";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rohan-Parmar-Learning-Angular';
  MarvelComics6: MarvelComics = {CharacterName: "Thor", power: "God of thunder", age: 10000, weapons: "stormbreaker", iscanfly: true };
  MarvelComics1: MarvelComics = {CharacterName: "Iron-Man", power: "Arc-Reactor and Iron suit", age: 89, weapons: "shield", iscanfly: true};
  MarvelComics2: MarvelComics = {CharacterName: "hulk", power: "hu", age: 56, weapons: "gama ", iscanfly: false};
  MarvelComics3: MarvelComics = {CharacterName: "captain marvel", power: "h", age: 46, weapons: "hh", iscanfly: false };
  MarvelComics4: MarvelComics = {CharacterName: "hawkeye", power: "n", age: 51, weapons: "h", iscanfly: false };
  MarvelComics5: MarvelComics = {CharacterName: "vision", power: "God of thunder", age: 81, weapons: "h", iscanfly: true };

  MarvelComicslist: MarvelComics [] = [this.MarvelComics6, this.MarvelComics1,this.MarvelComics2, this.MarvelComics3, this.MarvelComics4,this.MarvelComics5];
}
