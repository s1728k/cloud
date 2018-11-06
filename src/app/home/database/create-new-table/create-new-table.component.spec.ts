import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTableComponent } from './create-new-table.component';

describe('CreateNewTableComponent', () => {
  let component: CreateNewTableComponent;
  let fixture: ComponentFixture<CreateNewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
