import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifarm-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.scss']
})
export class RemedyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public onSelectId(id: number): void {
    console.log("🚀 ~ file: remedy.component.ts ~ line 18 ~ RemedyComponent ~ onSelectId ~ id", id)
  }

  public onAddNewItem(): void {
    console.log("🚀 ~ file: remedy.component.ts SELECTED ")
  }


}
