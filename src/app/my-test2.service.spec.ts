import { TestBed } from '@angular/core/testing';

import { MyTest2Service } from './my-test2.service';

describe('MyTest2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTest2Service = TestBed.get(MyTest2Service);
    expect(service).toBeTruthy();
  });
});
