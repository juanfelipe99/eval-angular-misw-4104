import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioDetail } from './repositorio-detail';

describe('RepositorioDetail', () => {
  let component: RepositorioDetail;
  let fixture: ComponentFixture<RepositorioDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorioDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
