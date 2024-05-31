import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionLComponent } from './accordion-l.component';

describe('AccordionLComponent', () => {
  let component: AccordionLComponent;
  let fixture: ComponentFixture<AccordionLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
