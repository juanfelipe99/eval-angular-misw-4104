import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioList } from './repositorio-list';

describe('RepositorioList', () => {
  let component: RepositorioList;
  let fixture: ComponentFixture<RepositorioList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioList],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorioList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
