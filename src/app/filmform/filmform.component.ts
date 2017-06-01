import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmform',
  templateUrl: './filmform.component.html',
  styleUrls: ['./filmform.component.css']
})
export class FilmformComponent implements OnInit {

    film = {
        titre: 'Le bal des vampires',
        annee: 1969,
        realisateur: 'Roman Polanski',
        genre: 'Epouvante'
    };

  onClick(){
  
   alert( this.film.titre );
  }

  constructor() { }

  ngOnInit() {
  }
}
