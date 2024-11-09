import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {User} from "../Shared/Model/User";
import {MarvelComics} from "../Shared/mockUser";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/User';
  private userList:User[] = MarvelComics;

  constructor(private http: HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  addUser(newUser:User):Observable<User>{
    newUser.id = this.generateNewId();
    return this.http.post<User>(this.apiUrl,newUser).pipe(catchError(this.handleError));
  }
  updateUser(updatedUser:User):Observable<User | undefined>{
    const url = `${this.apiUrl}/${updatedUser.id}`;
    return this.http.put<User>(url,updatedUser).pipe(catchError(this.handleError));
  }

getUserById(id:string):Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
}
  generateNewId():number {
    return this.userList.length > 0 ? Math.max(...this.userList.map(user => user.id))+1:1;
  }
  private handleError(error: HttpErrorResponse){
    console.error('API error:', error);
    return throwError(()=> new Error('Server Error'));
  }

}
