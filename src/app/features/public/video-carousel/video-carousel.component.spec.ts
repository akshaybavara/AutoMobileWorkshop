import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCarouselComponent } from './video-carousel.component';

describe('VideoCarouselComponent', () => {
  let component: VideoCarouselComponent;
  let fixture: ComponentFixture<VideoCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCarouselComponent]
    });
    fixture = TestBed.createComponent(VideoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
