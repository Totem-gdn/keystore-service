export class NumberUtils {
  static getRandomInt(min, max) {
    return parseInt((Math.random() * (max - min) + min).toFixed(0), 10);
  }

  static getRandomFloat(min, max, decimals = 2) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }
}
