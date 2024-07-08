import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLeftComponent } from './projects-left.component';

describe('ProjectsLeftComponent', () => {
  let component: ProjectsLeftComponent;
  let fixture: ComponentFixture<ProjectsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
