import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: any[] = []
  public nameValue: string = ''

  public fetchUserData() :void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.users = data
        console.log(`
          [
            ${this.users.forEach(el => console.log(el.toString()))}
          ]
        `)
      })
  }

  public computedUsers(): any[] {
    let value = this.nameValue.toLowerCase()
    return this.users.filter(el => el.name.toLowerCase().includes(value))
  }
}
