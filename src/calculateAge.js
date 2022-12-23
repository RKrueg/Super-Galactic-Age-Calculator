export class Calculate {
  constructor(age) {
    this.age = age;
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
   
  }
}