import { Component, OnInit } from '@angular/core';
import { Jazzman } from './jazzman.model';

@Component({
  selector: 'app-jazzmen',
  templateUrl: './jazzmen.component.html',
  styleUrls: ['./jazzmen.component.css']
})

export class JazzmenComponent {

  jazzmen: Jazzman[] = [
  	new Jazzman('Coltrane', 'hard-bop', '1955'),
  	new Jazzman('Davis', 'modal', '1945')
  ];

}
