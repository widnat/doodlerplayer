import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGuessComponent } from './first-guess.component';

describe('FirstGuessComponent', () => {
  let component: FirstGuessComponent;
  let fixture: ComponentFixture<FirstGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstGuessComponent]
    });
    fixture = TestBed.createComponent(FirstGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
