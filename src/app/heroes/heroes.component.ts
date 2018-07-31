import { Component, OnInit } from '@angular/core';
import { FormsModel } from '@2angular/forms'

import { Hero } from '../Shared/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name:'Windstom'
  }

  constructor() { }

  ngOnInit() {
  }

}
