import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ifarm-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.scss']
})
export class RemedyComponent implements OnInit {

  public showModalAddNewItem = false;

  constructor() { }

  ngOnInit() { } 
  

  public onSelectId(id: number): void {
    console.log("🚀 ~ file: remedy.component.ts ~ line 18 ~ RemedyComponent ~ onSelectId ~ id", id)
  }

  public onAddNewItem(): void {
    this.showModalAddNewItem = !this.showModalAddNewItem;
  }

  public drop(ev: DragEvent | any): void {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const valor = ev.target.appendChild(document.getElementById(data));
    // this.done.push(valor.innerText)
  }

  public allowDrop(ev: DragEvent | any): void {
    ev.preventDefault();
  }


  public closeBackDrop(event) {
    this.showModalAddNewItem = false
  console.log("🚀 ~ file: remedy.component.ts ~ line 40 ~ RemedyComponent ~ closeBackDrop ~ event", event)

  }

 



}
