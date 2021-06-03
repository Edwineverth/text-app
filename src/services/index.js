import { invertText, isLetter, palindrome } from '../utils';

class IechoService {
  async getIecho({ req }) {
    const text = req.query && req.query.text ? req.query.text : undefined;
    if (!text || !isLetter(text)) {
      throw new Error('No Text');
    }

    return { text: invertText(text).invert, palindrome: palindrome(text) };
  }
}

module.exports = IechoService;
