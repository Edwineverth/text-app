import {
  palindrome,
  normalizeText,
  deleteSpecialCharacters,
  deleteSpace,
  isEqualText,
  isLetter,
  invertText
} from '../utils/index';
import assert from 'assert';

describe.only('utils', function () {
  describe('When isLetter', function () {
    it('It should return true if the word sent is a text.', function () {
      assert.strictEqual(isLetter('word'), true);
    });
    it('It should return false if the word sent is not a word.', function () {
      assert.strictEqual(isLetter('word0001'), false);
    });

    it('It should return true yes when sending a phrase with only text.', function () {
      assert.strictEqual(isLetter('Hello, How are you?'), true);
    });

    it('It should return false yes when sending a sentence with text and numbers.', function () {
      assert.strictEqual(isLetter('Hello, How are you 001?'), false);
    });
  });

  describe('When invert text', function () {
    it('Should return the inverted text', function () {
      assert.strictEqual(invertText('Text Inverted').invert, 'detrevnI txeT');
    });
  });

  describe('When palindrome', function () {
    it('Should return true Case 1', function () {
      const result = palindrome('radar');
      assert.strictEqual(result, true);
    });
    it('Should return false Case 2', function () {
      const result = palindrome('roedor');
      assert.strictEqual(result, false);
    });
    it('Should return true Case 3', function () {
      const result = palindrome(
        'A mama Roma le aviva el amor a papa y a papa Roma le aviva el amor a mama.'
      );
      assert.strictEqual(result, true);
    });
    it('Should return true Case 5', function () {
      const result = palindrome('¿No bajará Sara jabón?.');
      assert.strictEqual(result, true);
    });
    it('Should return true Case 6', function () {
      const result = palindrome('Sí, lo sé Solís.');
      assert.strictEqual(result, true);
    });
  });

  describe('When isEqualText', function () {
    it('Should return true if equal text', function () {
      assert.strictEqual(isEqualText('aa', 'aa'), true);
    });
    it('Should return false if equal text', function () {
      assert.strictEqual(isEqualText('value', 'values2'), false);
    });
  });

  describe('When normalizeText', function () {
    it('Should return normalized text María', function () {
      assert.strictEqual(normalizeText('María'), 'Maria');
    });
    it('Should return normalized text ááááá', function () {
      assert.strictEqual(normalizeText('ááááá'), 'aaaaa');
    });
    it('Should return normalized text normalText', function () {
      assert.strictEqual(normalizeText('normalText'), 'normalText');
    });
  });

  describe('When deleteSpecialCharacters', function () {
    it('Should return text without the point', function () {
      assert.strictEqual(deleteSpecialCharacters('.otherText.'), 'otherText');
    });
    it('Should return text without changes', function () {
      assert.strictEqual(deleteSpecialCharacters('newText'), 'newText');
    });
  });

  describe('When deleteSpace', function () {
    it('SShould return text without space', function () {
      assert.strictEqual(deleteSpace('   text  '), 'text');
    });
    it('Should return text without changes', function () {
      assert.strictEqual(deleteSpace('NEW OTHER TEXT'), 'newothertext');
    });
  });
});
