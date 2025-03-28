import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiosComponent } from './bios.component';

describe('BiosComponent', () => {
  let component: BiosComponent;
  let fixture: ComponentFixture<BiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
