import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectOptionComponent } from './button-select-option.component';

describe('ButtonSelectOptionComponent', () => {
  let component: ButtonSelectOptionComponent;
  let fixture: ComponentFixture<ButtonSelectOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSelectOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
