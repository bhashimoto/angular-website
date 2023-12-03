import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemon, getPokemon } from '../api/pokedex-api-handler';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.css']
})
export class PokedexDetailComponent implements OnInit {
  pokemonData:pokemon;
  private id:string = '0';

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.pokemonData = {
      id: 0,
      name: "Not Found",
      image: "",
      height: 0,
      weight: 0,
      types: [""],
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        special_attack: 0,
        special_defense: 0,
        speed: 0,
      },
      moves: [""]
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("id") as string;
    });

    getPokemon(this.id)
      .then((value) => this.pokemonData = value);
    
  }

  ngAfterViewChecked(){
    this.titleService.setTitle(`Pokédex - ${this.pokemonData?.name}`);
  }

  calculateStatFill(stat:number|undefined){
    if(stat === undefined){
      return 0;
    }
    return stat/2.55;
  }
}
