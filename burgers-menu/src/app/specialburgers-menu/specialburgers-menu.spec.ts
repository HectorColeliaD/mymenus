import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialburgersMenu } from './specialburgers-menu';

describe('SpecialburgersMenu', () => {
  let component: SpecialburgersMenu;
  let fixture: ComponentFixture<SpecialburgersMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialburgersMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialburgersMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
