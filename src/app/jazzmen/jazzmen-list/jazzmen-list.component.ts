import { Component, OnInit, Input } from '@angular/core';
import { Jazzman } from '../jazzman.model';


@Component({
  selector: 'app-jazzmen-list',
  templateUrl: './jazzmen-list.component.html',
  styleUrls: ['./jazzmen-list.component.css']
})
export class JazzmenListComponent implements OnInit {

  @Input() genre: string;
  jazzmen: Jazzman[] = [
  	new Jazzman('Coltrane', 'hard-bop', '1955'),
  	new Jazzman('Davis', 'modal', '1945')
  ];	

  constructor() { }

  ngOnInit() {
  }

}
