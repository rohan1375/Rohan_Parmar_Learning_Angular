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
    return of(this.userList);
  }
getUserById(id:number):Observable<User | undefined> {
    return of (this.userList.find((user:User) => user.id === id));
}
  addUser(newUser:User):Observable<User>{
    this.userList.push(newUser)
    return of(newUser);
  }

  updateUser(updateUser:User):Observable<User | undefined>{
    const index = this.userList.findIndex(user => user.id === updateUser.id);
    if (index > -1) {
      this.userList[index]=updateUser;
      return of(updateUser);
    }
    return of(undefined);
  }
  deleteUser(id: number):Observable<User[]>{
    this.userList = this.userList.filter(user => user.id !== id);
    return of(this.userList);
  }
  generateNewId():number {
    return this.userList.length > 0 ? Math.max(...this.userList.map(user => user.id))+1:1;
  }

}
