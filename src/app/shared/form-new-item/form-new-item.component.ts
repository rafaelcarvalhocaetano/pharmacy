import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ifarm-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent implements OnInit {


  @Output() public closeForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
