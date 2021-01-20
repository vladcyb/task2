const _ = {
  sortedUnique: <T extends number | string>(array: T[]): T[] => {
    if (!array.length) {
      return [];
    }
    const resultArray: T[] = [];
    let lastValue = array[0];
    resultArray[0] = lastValue;
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== lastValue) {
        lastValue = array[i];
        resultArray.push(lastValue);
      }
    }
    return resultArray;
  },
  difference: <T, U>(array: T[], another: (T | U)[]) => {
    const result = [];
    for (const value of array) {
      if (!another.includes(value)) {
        result.push(value);
      }
    }
    return result;
  },
  isEqual: (obj1: any, obj2: any): boolean => {
    if (obj1 === null || obj2 === null) {
      return obj1 === obj2;
    }
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
    if (typeof obj1 === 'number' && isNaN(obj1) && isNaN(obj2)) {
      return true;
    }
    if (obj1 === obj2) {
      return true;
    }
    if (typeof obj1 !== 'object') {
      return false;
    }

    for (let key in obj1) {
      if (!_.isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  },
};
