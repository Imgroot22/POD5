import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionInputComponent } from './pension-input.component';

describe('PensionInputComponent', () => {
  let component: PensionInputComponent;
  let fixture: ComponentFixture<PensionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
