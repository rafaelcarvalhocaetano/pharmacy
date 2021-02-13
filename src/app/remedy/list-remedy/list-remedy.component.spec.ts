import { async } from '@angular/core/testing';

import { ListRemedyComponent } from './list-remedy.component';

describe('ListRemedyComponent', () => {
  let component: ListRemedyComponent;

  beforeEach(async(() => component = new ListRemedyComponent()));


  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
