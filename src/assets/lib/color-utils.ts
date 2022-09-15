export type Color = string;

export class ColorUtils {
  static randomHex(): Color {
    return `#${('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6)}`;
  }

  static randomDarkHex(): Color {
    let color = '';
    for (let i = 0; i < 3; i++) {
      color += ('0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    }
    return `#${color}`;
  }

  static randomLightHex(): Color {
    let color = '';
    for (let i = 0; i < 3; i++) {
      color += ('0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    }
    return `#${color}`;
  }
}
