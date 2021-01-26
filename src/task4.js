const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(timeout);
    }, timeout);
  });
};

const test1 = async () => {
  console.log('start');
  await delay(1000);
  console.log('finish');
};

const getRandomBoolean = () => Math.floor(Math.random() * 2) === 0;


const nonStableFetch = () => {
  return new Promise((resolve, reject) => {
    if (getRandomBoolean()) {
      resolve({
        data: { x: 1, yasdf: '323' },
      });
    } else {
      reject('[nonStableFetch]: Network error!');
    }
  });
};

const fakeFetch = (x) => {
  return new Promise((resolve, reject) => {
    if (typeof x === 'undefined') {
      reject('[fakeFetch]: x not provided');
    } else {
      resolve({
        data: { value: Math.random() },
      });
    }
  });
};

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const result = new Array(promises.length);
    promises.forEach(async (promise, index) => {
      try {
        result[index] = await promise;
        if (index === promises.length - 1) {
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
    // const result = await Promise.all([nonStableFetch(), fakeFetch(1)]);
    const result = await promiseAll([nonStableFetch(), fakeFetch(1)]);
    console.log(JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
};


test2();
