import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'ifarm-list-remedy',
  templateUrl: './list-remedy.component.html',
  styleUrls: ['./list-remedy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRemedyComponent implements OnInit {


  public valor: string;


  constructor() { 
  }

  ngOnInit(): void {
  }


  todo = [
    {
      id: 1,
      selectedCard: false,
      productPath: '../../../../assets/img/rmd.png',
      productTitle: 'Jointum',
      productValue: '8.00'
    },
    {
      id: 2,
      selectedCard: false,
      productPath: '../../../../assets/img/rmd.png',
      productTitle: 'Rafael (tablets)',
      productValue: '8.00'
    },
    {
      id: 3,
      selectedCard: false,
      productPath: '../../../../assets/img/rmd.png',
      productTitle: 'Teste (tablets)',
      productValue: '8.00'
    }
  ];


  onDragstart(e) {
    e.srcElement.style.opacity = '0.4'
    e.dataTransfer.setData("text", e.target.id);
  }

  allowDrop(ev) {
    ev.dataTransfer.dropEffect = 'move';
    ev.preventDefault();
  }

}
