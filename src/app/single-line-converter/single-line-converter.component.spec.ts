import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineConverterComponent } from './single-line-converter.component';

describe('SingleLineConverterComponent', () => {
  let component: SingleLineConverterComponent;
  let fixture: ComponentFixture<SingleLineConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLineConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLineConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
