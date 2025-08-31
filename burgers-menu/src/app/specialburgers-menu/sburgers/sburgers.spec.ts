import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sburgers } from './sburgers';

describe('Sburgers', () => {
  let component: Sburgers;
  let fixture: ComponentFixture<Sburgers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sburgers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sburgers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
