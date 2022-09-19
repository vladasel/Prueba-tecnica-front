import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSComponent } from './more-s.component';

describe('MoreSComponent', () => {
  let component: MoreSComponent;
  let fixture: ComponentFixture<MoreSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
