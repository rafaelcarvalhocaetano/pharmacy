import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {


  public showListUser = false;

  constructor() { }

  ngOnInit(): void {
  }

}
