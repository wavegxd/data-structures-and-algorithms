// no additional data structure solution

function isUnique(arr) {
  let ptr = 0;
  let ptr1 = 1;

  while (ptr < arr.length - 1) {
    if (arr[ptr] === arr[ptr1]) return false;
    if (ptr1 === arr.length - 1) {
      ptr++;
      ptr1 = ptr + 1;
    } else ptr1++;
  }
  return true;
}
