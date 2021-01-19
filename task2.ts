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
  difference: <T extends number | string>(array: T[], another: T[]): T[] => {
    const result: T[] = [];
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
    if (obj1 === obj2) {
      return true;
    }
    if (
      typeof obj1 === 'number' || typeof obj1 === 'bigint' ||
      typeof obj1 === 'string' || typeof obj1 === 'boolean' ||
      typeof obj1 === 'symbol'
    ) {
      return false;
    }

    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (let i = 0; i < obj1.length; i++) {
        if (!_.isEqual(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    }
    const objectKeys = Object.keys(obj1);
    for (let i = 0; i < objectKeys.length; i++) {
      if (!_.isEqual(obj1[objectKeys[i]], obj2[objectKeys[i]])) {
        return false;
      }
    }
    return true;
  },
};
