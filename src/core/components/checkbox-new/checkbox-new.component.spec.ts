import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxNewComponent } from './checkbox-new.component';

describe('CheckboxNewComponent', () => {
  let component: CheckboxNewComponent;
  let fixture: ComponentFixture<CheckboxNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
