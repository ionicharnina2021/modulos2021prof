import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDosComponent } from './compo-dos.component';

describe('CompoDosComponent', () => {
  let component: CompoDosComponent;
  let fixture: ComponentFixture<CompoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
