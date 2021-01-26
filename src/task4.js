const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
};

const test1 = async () => {
  console.log('start');
  await delay(1000);
  console.log('finish');
};

const getRandomBoolean = () => Math.floor(Math.random() * 2) === 0;

const API = {
  nonStableFetch: (isStable) => {
    return new Promise((resolve, reject) => {
      if (getRandomBoolean() || isStable) {
        resolve({ data: { x: 1, yasdf: '323' }, method: 'nonStableFetch' });
      } else {
        reject('[nonStableFetch]: Network error!');
      }
    });
  },
  fakeFetch: (x) => {
    return new Promise((resolve, reject) => {
      if (typeof x === 'undefined') {
        reject('[fakeFetch]: x not provided');
      } else if (getRandomBoolean()) {
        setTimeout(() => {
          resolve({ data: { value: Math.random() }, method: 'fakeFetch' });
        }, 500);
      } else {
        reject('[fakeFetch]: Network error!');
      }
    });
  },
  longFetch: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ok: true, method: 'longFetch' });
      }, 1500);
    });
  },
  oneSecondFetch: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({method: 'oneSecondFetch'});
      }, 1000)
    });
  },
  twoSecondsFetch: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({method: 'twoSecondsFetch'});
      }, 2000)
    });
  },
  threeSecondsFetch: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({method: 'threeSecondsFetch'});
      }, 3000)
    });
  }
};

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    promises.forEach(async (promise) => {
      try {
        result.push(await promise);
        if (result.length === promises.length) {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
};

const promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise) => {
      try {
        resolve(await promise);
      } catch (e) {
        reject(e);
      }
    });
  });
};

const promiseAllTest = async () => {
  try {
    const result = await promiseAll([
      API.fakeFetch(1),
      API.nonStableFetch(),
      API.longFetch(),
    ]);
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.log(e);
  }
};

const promiseRaceTest = async () => {
  try {
    const result = await promiseRace([
      API.threeSecondsFetch(),
      API.twoSecondsFetch(),
      API.oneSecondFetch(),
    ]);
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.log(e);
  }
};

promiseAllTest();

// promiseRaceTest();
