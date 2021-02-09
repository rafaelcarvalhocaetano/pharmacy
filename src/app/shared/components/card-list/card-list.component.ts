import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ifarm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {


  @Output() public drop = new EventEmitter<any>();
  @Output() public allowDrop = new EventEmitter<any>();

  @Input() isLoader = false;
  

  lista = [
    {
      id: 1,
      path: '../../../../assets/img/remedio.png'
    },
    {
      id: 2,
      path: '../../../../assets/img/remedio.png'
    },
    {
      id: 3,
      path: '../../../../assets/img/remedio.png'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
