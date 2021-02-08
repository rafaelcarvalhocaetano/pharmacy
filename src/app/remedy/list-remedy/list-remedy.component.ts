import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ifarm-list-remedy',
  templateUrl: './list-remedy.component.html',
  styleUrls: ['./list-remedy.component.scss']
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


  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }


}
