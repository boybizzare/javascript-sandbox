const singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Jamal' });
    return object;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB); // says true in console

// console.log(instanceA)
