import { MinuteToTimePipe } from './minute-to-time.pipe';

describe('MinuteToTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MinuteToTimePipe();
    expect(pipe).toBeTruthy();
  });
});
