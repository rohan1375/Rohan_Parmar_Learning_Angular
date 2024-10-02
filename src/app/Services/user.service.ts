import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../Shared/Model/User";
import {MarvelComics} from "../Shared/mockUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers():Observable<User[]>{
    return of(MarvelComics);
  }
}
