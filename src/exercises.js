function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  // write your code here
  const aFirst = a[0];
  const aLast = a[a.length - 1];
  const bFirst = b[0];
  const bLast = b[b.length - 1];

  if (aFirst == bFirst) {
    return true;
  }
  else if (aLast == bLast) {
    return true;
  }

  return false;
}

function endsMeet(values, n) {
  if (!values || n > values.length || n <= 0) {
    return [];
  }
  const nFirst = values.slice(0, n);
  const nLast = values.slice(values.length - n, values.length);

  return nFirst.concat(nLast);
}

function difference(numbers) {
if (!numbers || numbers.length === 1 || number.isNaN){
  return undefined;
}
const numMin = Math.min.apply(null, numbers);
const numMax = Math.min.apply(null, numbers);

  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
