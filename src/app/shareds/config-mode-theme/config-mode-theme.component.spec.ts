import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigModeThemeComponent } from './config-mode-theme.component';

describe('ConfigModeThemeComponent', () => {
  let component: ConfigModeThemeComponent;
  let fixture: ComponentFixture<ConfigModeThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigModeThemeComponent]
    });
    fixture = TestBed.createComponent(ConfigModeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
