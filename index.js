function getGlobal() { 
  if (typeof globalThis !== 'undefined') { return globalThis; } 
  if (typeof self !== 'undefined') { return self; } 
  if (typeof window !== 'undefined') { return window; } 
  if (typeof global !== 'undefined') { return global; } 
  throw new Error('unable to locate global object'); 
} 

module.exports = function awaitGlobal(key, wait) {
  const root = getGlobal();
  return new Promise((resolve, reject) => {
    let timer;
    const loop = () => {
      if(root[key]) {
        resolve(root[key]);
        clearInterval(timer);
      }
    };
    timer = setInterval(loop, wait || 300);
    loop();
  });
};
