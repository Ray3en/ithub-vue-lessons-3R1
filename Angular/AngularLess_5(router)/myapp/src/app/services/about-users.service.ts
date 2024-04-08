import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number,
  username: string,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AboutUsersService {
  public users: User[] = []

  public user: User | Record<string,never> = {}

  constructor(private http: HttpClient) { }

    public getUsers(){
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe((data: any) => {
          this.users = data.map( (elem: any) => ({id: elem.id, username: elem.username, name: elem.name, email: elem.email}))
        })
    }

    public getUser(id: string){
      this.user = {}
      this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
        .subscribe((data: any) => {
          this.user = {
            id: data.id,
            name: data.name,
            username: data.username,
            email: data.email,
          }
        })
    }
}
