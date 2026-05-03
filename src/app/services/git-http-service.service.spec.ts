import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { GitHttpServiceService } from './git-http-service.service';

describe('GitHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideHttpClient()
    ]
  }));

  it('should be created', () => {
    const service: GitHttpServiceService = TestBed.inject(GitHttpServiceService);
    expect(service).toBeTruthy();
  });
});
