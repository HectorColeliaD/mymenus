import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dproducts } from './dproducts';

describe('Dproducts', () => {
  let component: Dproducts;
  let fixture: ComponentFixture<Dproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
