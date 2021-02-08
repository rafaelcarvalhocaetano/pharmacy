import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'ifarm-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.scss']
})
export class RemedyComponent implements OnInit {

  
  done = [];

  constructor() { }

  ngOnInit(): void {
  }


  public onSelectId(id: number): void {
    console.log("🚀 ~ file: remedy.component.ts ~ line 18 ~ RemedyComponent ~ onSelectId ~ id", id)
  }

  public onAddNewItem(): void {
    console.log("🚀 ~ file: remedy.component.ts SELECTED ")
  }

  public drop(ev: DragEvent | any): void {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const valor = ev.target.appendChild(document.getElementById(data));
    this.done.push(valor.innerText)
  }

  public allowDrop(ev: DragEvent | any): void {
    ev.preventDefault();
  }

 



}
