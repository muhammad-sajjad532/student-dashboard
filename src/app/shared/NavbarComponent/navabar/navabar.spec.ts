import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navabar } from './navabar';

describe('Navabar', () => {
  let component: Navabar;
  let fixture: ComponentFixture<Navabar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navabar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navabar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
