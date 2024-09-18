import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {User} from "./Shared/Model/User";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marvel Comics';
  MarvelComics1: User = {CharacterName: "Thor", power: "God of Thunder", age: 1500, weapons: "Mjolnir", iscanfly: true};
  MarvelComics2: User = {CharacterName: "Iron-Man", power: "Iron-Armor", age: 40, weapons: "Arc-reactor", iscanfly: true};
  MarvelComics3: User = {CharacterName: "Captain America", power: "Super human strength", age: 96, weapons: "Vibranium Shield", iscanfly: false};
  MarvelComics4: User = {CharacterName: "Wolverine", power: "Healing", age: 200, weapons: "Adamantium Claws", iscanfly: false};
  MarvelComics5: User = {CharacterName: "Doctor Strange", power: "Magic", age: 45, weapons: "Eye of Agamotto, Cloak", iscanfly: true};
  MarvelComics6: User = {CharacterName: "Spider-Man", power: "Spider-Sense, Strength", age: 20, weapons: "Web-Shooters", iscanfly: false};

  MarvelComicslist: User [] = [
    this.MarvelComics1,
    this.MarvelComics2,
    this.MarvelComics3,
    this.MarvelComics4,
    this.MarvelComics5,
    this.MarvelComics6
  ];
}
