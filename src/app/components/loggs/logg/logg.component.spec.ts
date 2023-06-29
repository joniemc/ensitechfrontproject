import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggComponent } from './logg.component';

describe('LoggComponent', () => {
  let component: LoggComponent;
  let fixture: ComponentFixture<LoggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggComponent]
    });
    fixture = TestBed.createComponent(LoggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
