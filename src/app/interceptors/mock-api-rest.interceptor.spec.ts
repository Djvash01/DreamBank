import { TestBed } from '@angular/core/testing';

import { MockApiRestInterceptor } from './mock-api-rest.interceptor';

describe('MockApiRestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockApiRestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockApiRestInterceptor = TestBed.inject(MockApiRestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
