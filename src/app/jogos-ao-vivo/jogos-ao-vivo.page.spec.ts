import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogosAoVivoPage } from './jogos-ao-vivo.page';

describe('JogosAoVivoPage', () => {
  let component: JogosAoVivoPage;
  let fixture: ComponentFixture<JogosAoVivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosAoVivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
