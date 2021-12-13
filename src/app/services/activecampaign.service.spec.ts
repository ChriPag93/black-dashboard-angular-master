import { TestBed } from '@angular/core/testing';

import { ActivecampaignService } from './activecampaign.service';

describe('ActivecampaignService', () => {
  let service: ActivecampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivecampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
