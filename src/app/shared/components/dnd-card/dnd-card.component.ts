import { Component, OnInit } from '@angular/core';
import { DnDCard } from 'src/app/core/model/card';

@Component({
  selector: 'ifarm-dnd-card',
  templateUrl: './dnd-card.component.html',
  styleUrls: ['./dnd-card.component.scss']
})
export class DndCardComponent implements OnInit {

  public itemCard: DnDCard = {
    id: '123asd',
    selectedCard: false,
    idSelected: 'qweasd',
    productPath: '../../../../assets/img/rmd.png',
    productTitle: 'Jointum (tablets)',
    productValue: '8.00'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
