import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  name: string = 'Rokhyatou';
  message1 = 'est un enfant';
  message2 = 'est un adolescent';
  count = 34;
  age: number = 22;
  choice: boolean = true;
  persons = [
    {
      name: 'Amy Ndiaye',
      age: 23
    },
    {
      name: 'Ndouckite Diouf',
      age: 19
    },
    {
      name: 'Moustapha Ka',
      age: 26
    }
  ];
  
  animals = [
    {
      name: 'Milou',
      race: 'berger',
      age: 5
    },
    {
      name: 'ladoum',
      race: 'mouton',
      age: 2
    },
    {
      name: 'latcity',
      race: 'chevre',
      age: 1
    }
  ]
  
  ngOnInit(): void {
    console.log('init Successful');
    console.log(this.sum(5,12));
  }

  sum(x:number,y:number ): number{
    return x + y;
  }
}
