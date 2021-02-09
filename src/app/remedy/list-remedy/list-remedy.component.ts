import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'ifarm-list-remedy',
  templateUrl: './list-remedy.component.html',
  styleUrls: ['./list-remedy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRemedyComponent implements OnInit {

  public valor: string;


  constructor() { }

  ngOnInit(): void {
  }

  todo = [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    }
  ];


  drag(e) {
    e.dataTransfer.setData("text", e.target.id);

  }

  allowDrop(ev) {
    ev.srcElement.style.opacity = '0.6';
    console.log("🚀 ~ file: list-remedy.component.ts ~ line 39 ~ ListRemedyComponent ~ allowDrop ~ ev", ev)
    ev.preventDefault();
  }

  


}
