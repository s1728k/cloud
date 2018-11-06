import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSolutionsComponent } from './login-solutions.component';

describe('LoginSolutionsComponent', () => {
  let component: LoginSolutionsComponent;
  let fixture: ComponentFixture<LoginSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
