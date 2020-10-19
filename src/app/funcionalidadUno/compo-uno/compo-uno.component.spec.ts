import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoUnoComponent } from './compo-uno.component';

describe('CompoUnoComponent', () => {
  let component: CompoUnoComponent;
  let fixture: ComponentFixture<CompoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
