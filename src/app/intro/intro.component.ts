import { Component, OnInit } from '@angular/core';
import { Jazzman } from './jazzman.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent {

  jazzmen: Jazzman[] = [
  	new Jazzman('Coltrane', 'hard-bop', '1955'),
  	new Jazzman('Davis', 'modal', '1945')
  ];

}
