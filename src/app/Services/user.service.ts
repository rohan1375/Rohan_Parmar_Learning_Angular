import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../Shared/Model/User";
import {MarvelComics} from "../Shared/mockUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList:User[] = MarvelComics;

  constructor() { }
  getUsers():Observable<User[]>{
    return of(MarvelComics);
  }

  addUser(newUser:User):Observable<User[]>{
    this.userList.push(newUser);
    return of(this.userList);
  }

  updateUser(updateUser:User):Observable<User[]>{
    const index = this.userList.findIndex(roh=>roh.CharacterName === updateUser.CharacterName);
    if (index !== -1) {
      this.userList[index]=updateUser;
    }
    return of(this.userList);
  }
  deleteUser(deleteCharacterName: string):Observable<User[]>{
    this.userList = this.userList.filter(roh=>roh.CharacterName !== deleteCharacterName);
    return of(this.userList);
  }
  getUser(readCharacterName:string):Observable<User | undefined>{
    const hero =this.userList.find(roh=>roh.CharacterName === readCharacterName);
    return of(hero);
  }

}
