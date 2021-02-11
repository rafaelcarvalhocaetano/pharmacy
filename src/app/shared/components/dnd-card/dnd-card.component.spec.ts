import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndCardComponent } from './dnd-card.component';

describe('DndCardComponent', () => {
  let component: DndCardComponent;
  let fixture: ComponentFixture<DndCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
