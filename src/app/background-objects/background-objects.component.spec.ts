import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundObjectsComponent } from './background-objects.component';

describe('BackgroundObjectsComponent', () => {
  let component: BackgroundObjectsComponent;
  let fixture: ComponentFixture<BackgroundObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundObjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
