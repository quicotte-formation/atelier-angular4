import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combopays',
  templateUrl: './combopays.component.html',
  styleUrls: ['./combopays.component.css']
})
export class CombopaysComponent implements OnInit {

    pays = ['Belgique', 'France', 'Senegal', 'Finlande'];

  constructor() { }

  ngOnInit() {
  }

}
