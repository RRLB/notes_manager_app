//

export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Fill in a minimum of ${min} letters`;
    }
  }

  static max(value, max) {
    if (value.length > max) {
      return `Fill in a maximum of ${max} letters`;
    }
  }
}
