import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePickersComponent } from './image-pickers.component';

describe('ImagePickersComponent', () => {
  let component: ImagePickersComponent;
  let fixture: ComponentFixture<ImagePickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
