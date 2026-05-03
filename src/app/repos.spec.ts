import { Repos } from './repos';

describe('Repos', () => {
  it('should create an instance', () => {
    expect(new Repos('repo-name', 'avatar-url', 'description', 'https://github.com/user/repo', 'TypeScript', 10, 2, '2026-05-03')).toBeTruthy();
  });
});
