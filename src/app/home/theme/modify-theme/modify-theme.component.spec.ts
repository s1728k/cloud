import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyThemeComponent } from './modify-theme.component';

describe('ModifyThemeComponent', () => {
  let component: ModifyThemeComponent;
  let fixture: ComponentFixture<ModifyThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
