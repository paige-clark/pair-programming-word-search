const transpose = function (matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  // solves horizontal
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (line of horizontalJoin) {
    if (line.includes(word))
      return true;
  }
  // solves vertical
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (line of verticalJoin) {
    if (line.includes(word))
      return true;
  }
  return false;
};

module.exports = wordSearch


/* NOTES
INTAKE: an array of arrays
HORIZONTAL:
- iterate through the array and check each row to see if it contains word
  - if it does contain the word, return true

VERTICAL:
- find a way to collect the vertical slices


OUTPUT: Return true if the word is found, and return false if the word is not found
*/