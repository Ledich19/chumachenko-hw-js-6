export default class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.salary = this.getSalary(position);
  }
  #getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  getSalary(value) {
    const loverValue = value.toUpperCase();
    console.log(loverValue.indexOf("JUNIOR"));
    switch (true) {
      case 0 <= loverValue.indexOf("JUNIOR"):
        return this.#getRandom(500, 1000);
      case 0 <= loverValue.indexOf("MIDDLE"):
        return this.#getRandom(1500, 2000);
      case 0 <= loverValue.indexOf("SENIOR"):
        return this.#getRandom(2500, 3000);
      default:
        return this.#getRandom(4000, 4500);
    }
  }
  tellAboutYourSelf() {
    return `Меня зовут ${this.name} и я - ${this.position}. Я зарабатываю ${this.salary}$.`;
  }
}
