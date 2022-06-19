import { getApiClient } from './apiClient';

it('apiClient init test', () => {
  expect(getApiClient('/test').defaults.baseURL).toEqual('/test');
});
