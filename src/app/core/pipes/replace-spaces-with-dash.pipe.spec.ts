import { ReplaceSpacesWithDashPipe } from './replace-spaces-with-dash.pipe';

describe('ReplaceSpacesWithDashPipe', () => {
  const pipe = new ReplaceSpacesWithDashPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "Great Britain" to "Great-Britain"', () => {
    expect(pipe.transform('Great Britain')).toBe('Great-Britain');
  });

  it('transforms "foo bar" to "foo-bar"', () => {
    expect(pipe.transform('foo bar')).toBe('foo-bar');
  });
});
