import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McPostsComponent } from './mc-posts.component';

describe('McPostsComponent', () => {
  let component: McPostsComponent;
  let fixture: ComponentFixture<McPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
