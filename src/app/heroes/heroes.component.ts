import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = "This is the title from the parent component"
  heroes: Hero[];
  /*selectedHero: Hero; */

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(h => this.heroes = h);
  }
  
/*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

}
