import { TestBed } from '@angular/core/testing';

import { ErrorsHandleInterceptor } from './errors-handle.interceptor';

describe('ErrorsHandleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorsHandleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorsHandleInterceptor = TestBed.inject(ErrorsHandleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
