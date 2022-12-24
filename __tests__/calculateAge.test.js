import { Calculate } from "../src/calculateAge";

describe('Calculate', () => {
  test('should correctly determine a persons age based on Mercurys solar years', () => {
    let calculateAge = new Calculate(32)
    expect(calculateAge.getAgeOnMercury()).toEqual(133);
  })
  test('should correctly determine a persons age based on Venus solar year', ()  => {
    let calculateAge = new Calculate(32)
    expect(calculateAge.getAgeOnVenus()).toEqual(51)
  })
  test('should correctly determine a persons age based on Mars solar year', () => {
    let calculateAge = new Calculate(32)
    expect(calculateAge.getAgeOnMars()).toEqual(17)
  })
  test('should correctly determine a persons age based on Jupiters solar year', () => {
    let calculateAge = new Calculate(32)
    expect(calculateAge.getAgeOnJupiter()).toEqual(2)
  })
  test('should determine how many years have passed on each planet since a past birthday', () => {
    let calculateAge = new Calculate(32)
    expect(calculateAge.getYearsPassedEarth()).toEqual(10)
    expect(calculateAge.getYearsPassedMercury()).toEqual(41)
    expect(calculateAge.getYearsPassedVenus()).toEqual(16)
    expect(calculateAge.getYearsPassedMars()).toEqual(6)
    expect(calculateAge.getYearsPassedJupiter()).toEqual(1)
  })
})