export const isLetter = (str) => {
  const normalizedText = deleteSpecialCharacters(normalizeText(str));
  return !!deleteSpace(normalizedText).match(/^[A-Za-z]+$/);
};

export const isEqualText = (firstText, secondText) => {
  return deleteSpace(firstText) === deleteSpace(secondText);
};

export const deleteSpace = (txt) => {
  return txt.replace(/ /g, '').toLowerCase();
};

export const deleteSpecialCharacters = (txt) => {
  return txt.replace(/[`~¡!@#$%^&*()_|+\-=¿?;:'",.<>{}\\[\]\\/]/gi, '');
};

export const normalizeText = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const invertText = (wordOrPhrase) => {
  const normalizedText = deleteSpecialCharacters(normalizeText(wordOrPhrase));
  return {
    text: normalizedText,
    invert: normalizedText.split('').reverse().join('')
  };
};

export const palindrome = (wordOrPhrase) => {
  const { text, invert } = invertText(wordOrPhrase);
  return isEqualText(text, invert);
};
