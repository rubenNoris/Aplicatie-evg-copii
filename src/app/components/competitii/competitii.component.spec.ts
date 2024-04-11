import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiiComponent } from './competitii.component';

describe('CompetitiiComponent', () => {
  let component: CompetitiiComponent;
  let fixture: ComponentFixture<CompetitiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetitiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
