import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainburgersMenu } from './mainburgers-menu';

describe('MainburgersMenu', () => {
  let component: MainburgersMenu;
  let fixture: ComponentFixture<MainburgersMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainburgersMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainburgersMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
