import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoneTodoComponent } from './show-done-todo.component';

describe('ShowDoneTodoComponentComponent', () => {
  let component: ShowDoneTodoComponent;
  let fixture: ComponentFixture<ShowDoneTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDoneTodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDoneTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
