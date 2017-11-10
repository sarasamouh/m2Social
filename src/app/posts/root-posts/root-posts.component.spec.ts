import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPostsComponent } from './root-posts.component';

describe('RootPostsComponent', () => {
  let component: RootPostsComponent;
  let fixture: ComponentFixture<RootPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
