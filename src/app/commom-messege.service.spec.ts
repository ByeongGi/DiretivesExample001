import { TestBed, inject } from '@angular/core/testing';

import { CommomMessegeService } from './commom-messege.service';

describe('CommomMessegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommomMessegeService]
    });
  });

  it('should be created', inject([CommomMessegeService], (service: CommomMessegeService) => {
    expect(service).toBeTruthy();
  }));
});
