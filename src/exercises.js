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
  
}

