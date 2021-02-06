import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitamineComponent } from './vitamine.component';

describe('VitamineComponent', () => {
  let component: VitamineComponent;
  let fixture: ComponentFixture<VitamineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitamineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
