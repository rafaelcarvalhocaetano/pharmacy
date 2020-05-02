import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemedyComponent } from './list-remedy.component';

describe('ListRemedyComponent', () => {
  let component: ListRemedyComponent;
  let fixture: ComponentFixture<ListRemedyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRemedyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
