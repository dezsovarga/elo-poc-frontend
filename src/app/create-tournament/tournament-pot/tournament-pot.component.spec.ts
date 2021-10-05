import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentPotComponent } from './tournament-pot.component';

describe('TournamentPotComponent', () => {
  let component: TournamentPotComponent;
  let fixture: ComponentFixture<TournamentPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentPotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
