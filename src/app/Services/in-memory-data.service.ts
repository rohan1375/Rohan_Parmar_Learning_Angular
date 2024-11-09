import {User} from "../Shared/Model/User";
import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb(): { user: User[] } {
    const user: User[] = [
      {
        id: 1,
        CharacterName: "Thor",
        power: "God of Thunder",
        age: 1500,
        weapons: "Mjolnir",
        iscanfly: true,
        photos: "/assets/thor.jpeg"
      },
      {
        id: 2,
        CharacterName: "Iron-Man",
        power: "Iron-Armor",
        age: 40,
        weapons: "Arc-reactor",
        iscanfly: true,
        photos: "/assets/iron_man.jpeg"
      },
      {
        id: 3,
        CharacterName: "Captain America",
        power: "Super human strength",
        age: 96,
        weapons: "Vibranium Shield",
        iscanfly: false,
        photos: "/assets/captain_america.jpeg"
      },
      {
        id: 4,
        CharacterName: "Wolverine",
        power: "Healing",
        age: 200,
        weapons: "Adamantium Claws",
        iscanfly: false,
        photos: "/assets/wolverine.jpeg"
      },
      {
        id: 5,
        CharacterName: "Doctor Strange",
        power: "Magic",
        age: 45,
        weapons: "Eye of Agamotto, Cloak",
        iscanfly: true,
        photos: "/assets/doctor_strange.jpeg"
      },
      {
        id: 6,
        CharacterName: "Spider-Man",
        power: "Spider-Sense, Strength",
        age: 20,
        weapons: "Web-Shooters",
        iscanfly: false,
        photos: "/assets/spider_man.jpeg"
      }


    ];
    return {user};
  }
}
