import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLisComponent } from './card-lis.component';

describe('CardLisComponent', () => {
  let component: CardLisComponent;
  let fixture: ComponentFixture<CardLisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLisComponent]
    });
    fixture = TestBed.createComponent(CardLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
