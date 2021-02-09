import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ifarm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {


  @Output() public drop = new EventEmitter<any>();
  @Output() public drapStart = new EventEmitter<any>();
  @Output() public allowDrop = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

}
