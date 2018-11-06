import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicThemesComponent } from './public-themes.component';

describe('PublicThemesComponent', () => {
  let component: PublicThemesComponent;
  let fixture: ComponentFixture<PublicThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
