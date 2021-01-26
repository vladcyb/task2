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
        resolve({ data: { x: 1, yasdf: '323' } });
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
          resolve({ data: { value: Math.random() } });
        }, 500);
      } else {
        reject('[fakeFetch]: Network error!');
      }
    });
  },
  longFetch: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ok: true });
      }, 1500);
    });
  },
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

const test2 = async () => {
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


test2();
