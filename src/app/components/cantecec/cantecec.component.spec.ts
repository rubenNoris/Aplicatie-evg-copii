import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantececComponent } from './cantecec.component';

describe('CantececComponent', () => {
  let component: CantececComponent;
  let fixture: ComponentFixture<CantececComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantececComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantececComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
