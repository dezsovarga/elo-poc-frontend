import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueGroupComponent } from './league-group.component';

describe('LeagueGroupComponent', () => {
  let component: LeagueGroupComponent;
  let fixture: ComponentFixture<LeagueGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
