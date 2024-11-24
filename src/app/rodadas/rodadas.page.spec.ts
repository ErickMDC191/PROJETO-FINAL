import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodadasPage } from './rodadas.page';

describe('RodadasPage', () => {
  let component: RodadasPage;
  let fixture: ComponentFixture<RodadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RodadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
