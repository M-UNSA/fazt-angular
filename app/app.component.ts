import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['ryan', 'joe', 'cameron'];

  sayHello(){
    alert('Hello');
  }

  deleteUser(user: string) {
    for(let i=0;i<this.users.length;i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
}
