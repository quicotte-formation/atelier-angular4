import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boundinput',
  templateUrl: './boundinput.component.html',
  styleUrls: ['./boundinput.component.css']
})
export class BoundinputComponent implements OnInit {

    contenu = 'Entrez des données ici';

  constructor() { }

  ngOnInit() {
  }

}
