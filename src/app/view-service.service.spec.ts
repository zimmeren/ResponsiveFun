import { TestBed, inject } from '@angular/core/testing';

import { ViewServiceService } from './view-service.service';

describe('ViewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewServiceService]
    });
  });

  it('should ...', inject([ViewServiceService], (service: ViewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
