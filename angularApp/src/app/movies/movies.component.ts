import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
movies: movies ={
  title: 'kingsman',
  description: 'kingsman is een film zoals jamesbond maar dan is er geprobeerd om het relifer te maken ik vind de mode van film mooi en de gebruik van lange scenes '
}
}
interface movies{
  title: string,
  description: string,
}