import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ifarm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
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
