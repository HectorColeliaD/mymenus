import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mburgers } from './mburgers';

describe('Mburgers', () => {
  let component: Mburgers;
  let fixture: ComponentFixture<Mburgers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mburgers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mburgers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
