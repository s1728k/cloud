import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTableListComponent } from './community-table-list.component';

describe('CommunityTableListComponent', () => {
  let component: CommunityTableListComponent;
  let fixture: ComponentFixture<CommunityTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
