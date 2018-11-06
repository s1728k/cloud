import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTableComponent } from './modify-table.component';

describe('ModifyTableComponent', () => {
  let component: ModifyTableComponent;
  let fixture: ComponentFixture<ModifyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
