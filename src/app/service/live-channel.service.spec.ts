import { TestBed } from '@angular/core/testing';

import { LiveChannelService } from './live-channel.service';

describe('LiveChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveChannelService = TestBed.get(LiveChannelService);
    expect(service).toBeTruthy();
  });
});
