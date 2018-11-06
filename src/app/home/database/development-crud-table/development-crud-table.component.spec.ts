import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentCrudTableComponent } from './development-crud-table.component';

describe('DevelopmentCrudTableComponent', () => {
  let component: DevelopmentCrudTableComponent;
  let fixture: ComponentFixture<DevelopmentCrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentCrudTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
