import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number = 5 
  n2: number = 2
  picName: string  = "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  hi(name:string){
    alert("Hello : " + name);
  }
}

