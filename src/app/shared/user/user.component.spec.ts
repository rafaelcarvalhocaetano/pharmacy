import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;

  beforeEach(() => {
    component = new UserComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
