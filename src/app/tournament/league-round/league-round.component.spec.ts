import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRoundComponent } from './league-round.component';

describe('LeagueRoundComponent', () => {
  let component: LeagueRoundComponent;
  let fixture: ComponentFixture<LeagueRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueRoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
