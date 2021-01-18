const _ = {
  sortedUnique: (array: number[]): number[] => {
    if (!array.length) {
      return [];
    }
    const resultArray: number[] = [];
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
};
