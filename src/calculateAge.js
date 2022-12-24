export class Calculate {
  constructor(age, pastDateAge) {
    this.age = age;
    this.pastDateAge = pastDateAge
  }
  getAgeOnMercury() {
    let mercuryAge = this.age / .24;
    return parseInt(mercuryAge)
  }
  getAgeOnVenus() {
    let venusAge = this.age / .62;
    return parseInt(venusAge)
  }
  getAgeOnMars() {
    let marsAge = this.age / 1.88;
    return parseInt(marsAge)
  }
  getAgeOnJupiter() {
    let jupiterAge = this.age / 11.86;
    return parseInt(jupiterAge)
  }
  getYearsPassedOnEarth() {
    let pastAge = this.pastDateAge;
    let yearsPassedEarth = this.age - pastAge;
    return yearsPassedEarth
  }
  getYearsPassedOnMercury() {
    let mercAge = this.age / .24;
    let pastMercAge = this.pastDateAge / .24;
    let yearsPassedMercury = mercAge - pastMercAge;
    return parseInt(yearsPassedMercury)
  }
  getYearsPassedOnVenus() {
    let venusAge = this.age / .62;
    let pastVenusAge = this.pastDateAge / .62;
    let yearsPassedVenus = venusAge - pastVenusAge;
    return parseInt(yearsPassedVenus)
  }
  getYearsPassedOnMars() {
    let marsAge = this.age / 1.88;
    let pastMarsAge = this.pastDateAge / 1.88;
    let yearsPassedMars = marsAge - pastMarsAge;
    return parseInt(yearsPassedMars)
  }
}