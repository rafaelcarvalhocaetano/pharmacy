import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ifarm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(120, style({ opacity: 1 }))
      ])
    ])  
  ]
})
export class ModalComponent {

  @Output() public onCloseModal = new EventEmitter<boolean>();

  public openClick(event: Event | any, dataNumber?: string): void {
    event.stopPropagation();
    if (dataNumber === 'modal') {
      this.onCloseModal.emit(false);
    }
  }

}
