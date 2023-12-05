import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() title:string = "";
  @Input() date:string = "";
  @Input() description:string = "";
  @Input() link:string = "";
  @Input() image:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
