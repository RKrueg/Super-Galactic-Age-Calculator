import Calculate from "../src/calculateAge";

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
  test('should determine how many years have passed on Earth since a past birthday', () => {
    let calculateAge = new Calculate(32, 22)
     expect(calculateAge.getYearsPassedOnEarth()).toEqual(10)
  })
  test('should determine how many years have passed on Mercury since a past birthday', () => {
    let calculateAge = new Calculate(32, 22)
     expect(calculateAge.getYearsPassedOnMercury()).toEqual(41)
  })
  test('should determine how many years have passed on Venus since a past birthday', () => {
    let calculateAge = new Calculate(32, 22)
     expect(calculateAge.getYearsPassedOnVenus()).toEqual(16)
  })
  test('should determine how many years have passed on Mars since a past birthday', () => {
    let calculateAge = new Calculate(32, 22)
     expect(calculateAge.getYearsPassedOnMars()).toEqual(5)
  })
  test('should determine how many years have passed on Jupiter since a past birthday', () => {
    let calculateAge = new Calculate(32, 22)
     expect(calculateAge.getYearsPassedOnJupiter()).toEqual(.84)
  })
  test('should determine how many years have yet to pass until a future birthday on Earth', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.earthYearsYetToPass()).toEqual(10)
  })
  test('should determine how many years have yet to pass until a future birthday on Mercury', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.mercYearsYetToPass()).toEqual(41)
  })
  test('should determine how many years have yet to pass until a future birthday on Venus', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.venusYearsYetToPass()).toEqual(16)
  })
  test('should determine how many years have yet to pass until a future birthday on Mars', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.marsYearsYetToPass()).toEqual(5)
  })
  test('should determine how many years have yet to pass until a future birthday on Jupiter', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.jupiterYearsYetToPass()).toEqual(.84)
  })
  test('should determine how many years have passed since a past birthday age for each planet and show results in string', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.returnYearsPassed()).toEqual("10 Earth years have passed. 41 Mercury years have passed. 16 Venus years have passed. 5 Mars years have passed. 0.84 Jupiter years have passed.")
  })
  test('should determine how many years have yet to pass until a future birthday for each planet and show results in string', () => {
    let calculateAge = new Calculate(32, 22, 42)
     expect(calculateAge.returnYearsYetToPass()).toEqual("10 Earth years have yet to pass. 41 Mercury years have yet to pass. 16 Venus years have yet to pass. 5 Mars years have yet to pass. 0.84 Jupiter years have yet to pass.")
  })
})