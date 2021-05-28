import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinaErfarenheterComponent } from './mina-erfarenheter.component';

describe('MinaErfarenheterComponent', () => {
  let component: MinaErfarenheterComponent;
  let fixture: ComponentFixture<MinaErfarenheterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinaErfarenheterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinaErfarenheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
