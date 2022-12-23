import Calculate from "../src/calculateAge";

describe('Calculate', () => {
  test('should correctly determine a persons age in solar years on Mercury', () => {
    const age = new Calculate (32);
    expect(age.mercuryAge).toEqual(133);
  })
})