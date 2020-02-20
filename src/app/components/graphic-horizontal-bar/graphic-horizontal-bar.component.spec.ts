import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicHorizontalBarComponent } from './graphic-horizontal-bar.component';

describe('GraphicHorizontalBarComponent', () => {
  let component: GraphicHorizontalBarComponent;
  let fixture: ComponentFixture<GraphicHorizontalBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicHorizontalBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
