export default class Calculate {
  constructor(age, pastDateAge, futureDateAge) {
    this.age = age;
    this.pastDateAge = pastDateAge;
    this.futureDateAge = futureDateAge
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
  getYearsPassedOnJupiter() {
    let jupAge = this.age / 11.86;
    let pastJupAge = this.pastDateAge / 11.86;
    let yearsPassedJupiter = jupAge - pastJupAge;
    return Math.floor(yearsPassedJupiter * 100)/100;
  }
  earthYearsYetToPass() {
    let earthAge = this.age;
    let futureAge = this.futureDateAge;
    let earthYearsToPass = futureAge - earthAge;
    return parseInt(earthYearsToPass)
  }
  mercYearsYetToPass() {
    let mercAge = this.age / .24;
    let futureAge = this.futureDateAge / .24;
    let mercYearsToPass = futureAge - mercAge;
    return parseInt(mercYearsToPass)
  }
  venusYearsYetToPass() {
    let venAge = this.age / .62;
    let futureAge = this.futureDateAge / .62;
    let venusYearsToPass = futureAge - venAge;
    return parseInt(venusYearsToPass)
  }
  marsYearsYetToPass() {
    let marsAge = this.age / 1.88;
    let futureAge = this.futureDateAge / 1.88;
    let marsYearsToPass = futureAge - marsAge;
    return parseInt(marsYearsToPass)
  }
  jupiterYearsYetToPass() {
    let jupAge = this.age / 11.86;
    let futureAge = this.futureDateAge / 11.86;
    let jupiterYearsToPass = futureAge - jupAge;
    return Math.floor(jupiterYearsToPass * 100)/100;
  }
  returnYearsPassed() {
    let earthAge = this.age - this.pastDateAge;
    let mercAge = parseInt((this.age - this.pastDateAge) / .24);
    let venAge = parseInt((this.age - this.pastDateAge) / .62);
    let marsAge = parseInt((this.age - this.pastDateAge) / 1.88);
    let jupAge = Math.floor((this.age - this.pastDateAge) / 11.86 * 100)/100;
    let yearsPassed = `${earthAge} Earth years have passed. ${mercAge} Mercury years have passed. ${venAge} Venus years have passed. ${marsAge} Mars years have passed. ${jupAge} Jupiter years have passed.`
    return yearsPassed;
  }
  returnYearsYetToPass() {
    
  }
}