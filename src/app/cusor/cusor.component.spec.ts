import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusorComponent } from './cusor.component';

describe('CusorComponent', () => {
  let component: CusorComponent;
  let fixture: ComponentFixture<CusorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
