import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeGameDashboardComponent } from './maze-game-dashboard.component';

describe('MazeGameDashboardComponent', () => {
  let component: MazeGameDashboardComponent;
  let fixture: ComponentFixture<MazeGameDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeGameDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeGameDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
