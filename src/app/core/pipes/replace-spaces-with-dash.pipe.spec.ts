import { ReplaceSpacesWithDashPipe } from './replace-spaces-with-dash.pipe';

describe('ReplaceSpacesWithDashPipe', () => {
  const pipe = new ReplaceSpacesWithDashPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "Grait Britain" to "Grait-Britain"', () => {
    expect(pipe.transform('Grait Britain')).toBe('Grait-Britain');
  });

  it('transforms "foo bar" to "foo-bar"', () => {
    expect(pipe.transform('foo bar')).toBe('foo-bar');
  });
});
