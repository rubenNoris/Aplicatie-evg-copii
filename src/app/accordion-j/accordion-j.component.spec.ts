import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionJComponent } from './accordion-j.component';

describe('AccordionJComponent', () => {
  let component: AccordionJComponent;
  let fixture: ComponentFixture<AccordionJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionJComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
