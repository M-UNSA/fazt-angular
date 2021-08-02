import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Ryan Ray';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.age = 28;
    this.address = {
      street: '221B Baker Street',
      city: 'Londres'
    };
    this.hobbies = ['nadar', 'leer', 'escribir']
  }
}
