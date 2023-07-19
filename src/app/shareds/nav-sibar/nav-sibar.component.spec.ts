import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSibarComponent } from './nav-sibar.component';

describe('NavSibarComponent', () => {
  let component: NavSibarComponent;
  let fixture: ComponentFixture<NavSibarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSibarComponent]
    });
    fixture = TestBed.createComponent(NavSibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
