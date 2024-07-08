import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRightComponent } from './projects-right.component';

describe('ProjectsRightComponent', () => {
  let component: ProjectsRightComponent;
  let fixture: ComponentFixture<ProjectsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
