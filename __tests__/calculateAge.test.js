import { Calculate } from "../src/calculateAge";

describe('Calculate', () => {
  test('should correctly determine a persons age based on Mercurys solar years', () => {
    let calculate = new Calculate(32)
    expect(calculate.getAgeOnMercury()).toEqual(133);
  })
  test('should correctly determine a persons age based on Venus solar year', ()  => {
    let calculate = new Calculate(32)
    expect(calculate.getAgeOnVenus()).toEqual(51)
  })
  test('should correctly determine a persons age based on Mars solar year', () => {
    let calculate = new Calculate(32)
    expect(calculate.getAgeOnMars()).toEqual(17)
  })
})