import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCComponent } from './accordion-c.component';

describe('AccordionCComponent', () => {
  let component: AccordionCComponent;
  let fixture: ComponentFixture<AccordionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
