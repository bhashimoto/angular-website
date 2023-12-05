import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { pokemon } from '../../api/pokedex-api-handler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css',
              './card.responsive.component.css',
              '../../types.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() pokemonData:pokemon|any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.pokemonData = changes['pokemonData'].currentValue;
  }

  ngOnInit(): void{
    console.log(this.pokemonData)
  }

  

}
