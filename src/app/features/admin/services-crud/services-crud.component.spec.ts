import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCrudComponent } from './services-crud.component';

describe('ServicesCrudComponent', () => {
  let component: ServicesCrudComponent;
  let fixture: ComponentFixture<ServicesCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCrudComponent]
    });
    fixture = TestBed.createComponent(ServicesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
