import { TestBed } from '@angular/core/testing';

import { Repositorios } from './repositorios';

describe('Repositorios', () => {
  let service: Repositorios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Repositorios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
