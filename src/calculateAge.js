export class Calculate {
  constructor(age, pastDate) {
    this.age = age;
    this.pastDate = pastDate
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
    let pastAge = this.pastDate;
    let yearsPassedEarth = this.age - pastAge;
    return yearsPassedEarth
  }
}