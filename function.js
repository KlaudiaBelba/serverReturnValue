export function sumArray(array) {
    let sum = 0; 

    array.forEach(item => {
      sum += item;
    });
      return sum;
  }