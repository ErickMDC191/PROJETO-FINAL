import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaAbaPage } from './nova-aba.page';

describe('NovaAbaPage', () => {
  let component: NovaAbaPage;
  let fixture: ComponentFixture<NovaAbaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
