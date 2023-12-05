import { Component, OnInit } from '@angular/core';
import { pokemon, getPokemonList, getPokemonListFromUrl } from '../api/pokedex-api-handler';

@Component({
  selector: 'app-pokedex-main',
  templateUrl: './pokedex-main.component.html',
  styleUrls: ['./pokedex-main.component.css', '../types.css'],
})
export class PokedexMainComponent implements OnInit {
  pokemons:pokemon[] = [];
  next:string = "";
  constructor() { }

  ngOnInit(): void{
    getPokemonList(5, 0)
    .then((value) => {
      this.next = value[0];
      this.pokemons = value[1];
    });
  }

  loadMore(){
    getPokemonListFromUrl(this.next)
    .then((value) => {
      this.next = value[0];
      this.pokemons.push(...value[1]);
    })
  }
}
