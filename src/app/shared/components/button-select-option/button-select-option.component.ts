import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ifarm-button-select-option',
  templateUrl: './button-select-option.component.html'
})
export class ButtonSelectOptionComponent {

  @Output() public onSelectId = new EventEmitter<number>();

  public selectColumn = true;
  public selectLine = false;

  public updateTypeOptions(id: number): void {
    if (id === 1) {
      this.selectLine = false;
      this.selectColumn = true;
      this.onSelectId.emit(1);
    } else {
      this.selectLine = true;
      this.selectColumn = false;
      this.onSelectId.emit(2);
    }
  }

}
