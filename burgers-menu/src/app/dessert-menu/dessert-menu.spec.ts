import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertMenu } from './dessert-menu';

describe('DessertMenu', () => {
  let component: DessertMenu;
  let fixture: ComponentFixture<DessertMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
