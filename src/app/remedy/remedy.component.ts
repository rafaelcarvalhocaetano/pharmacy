import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifarm-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.scss']
})
export class RemedyComponent implements OnInit {

  public showModalAddNewItem = false;
  public loader = false;

  constructor() { }

  ngOnInit() { } 
  

  public onSelectId(id: number): void {
  }

  public onAddNewItem(): void {
    this.showModalAddNewItem = !this.showModalAddNewItem;
  }


  public drop(ev: DragEvent | any): void {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    // const valor = ev.target.appendChild(document.getElementById(data));
    // this.done.push(valor.innerText)
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  public allowDrop(ev: DragEvent | any): void {
    ev.preventDefault();
  }

  public closeBackDrop(event) {
    this.showModalAddNewItem = false
  }

 



}
