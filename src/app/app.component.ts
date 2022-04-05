import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  toggle = true

  cards: Card[] = [
    {title: 'Card 1', text: 'This is card numer 1'},
    {title: 'This is card 2', text: 'This is card numer 2'},
    {title: 'Last Card 3', text: 'This is card numer 3'},
    {title: 'Last Card 4', text: 'This is card numer 4'},
    {title: 'Last Card 5', text: 'This is card numer 5'},
    {title: 'Last Card 6', text: 'This is card numer 6'},
  ]

  toggleCards() {
    console.log('Hi', this.toggle)
    this.toggle = !this.toggle
  }
}
