import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkComponent } from './werk.component';

describe('WerkComponent', () => {
  let component: WerkComponent;
  let fixture: ComponentFixture<WerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WerkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
