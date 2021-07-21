import { idGenerator, randNum } from '../Helpers/helpers';

describe('Return a random number', () => {
  it('Generate an id', () => {
    expect(idGenerator()).not.toBeNaN();
  });

  it('Generate a random num for percentage', () => {
    expect(randNum()).not.toBeNaN();
  });
});
