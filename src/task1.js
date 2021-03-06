const _ = {
  sortedUnique: (array) => {
    if (!array.length) {
      return [];
    }
    let [lastValue] = array;
    const resultArray = [lastValue];
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== lastValue) {
        lastValue = array[i];
        resultArray.push(lastValue);
      }
    }
    return resultArray;
  },
  difference: (array, another) => {
    const result = [];
    for (const value of array) {
      if (!another.includes(value)) {
        result.push(value);
      }
    }
    return result;
  },
  isEqual: (obj1, obj2) => {
    if (obj1 === null || obj2 === null) {
      return obj1 === obj2;
    }
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
    if (typeof obj1 === 'number' && isNaN(obj1) && isNaN(obj2) || obj1 === obj2) {
      return true;
    }
    if (typeof obj1 !== 'object' || Array.isArray(obj1) && obj1.length !== obj2.length) {
      return false;
    }
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (let key of obj1Keys) {
      if (!(obj2.hasOwnProperty(key) && _.isEqual(obj1[key], obj2[key]))) {
        return false;
      }
    }
    return true;
  },
};
