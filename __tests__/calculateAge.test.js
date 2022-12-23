import { Calculate } from "../src/calculateAge";

describe('Calculate', () => {
  test('should correctly determine a persons age based on Mercurys solar years', () => {
    let calculate = new Calculate(32)
    expect(calculate.getAgeOnMercury()).toEqual(133);
  })
})