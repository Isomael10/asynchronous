// Cette fonction attend 1 seconde
function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Le minuteur dure 1000 millisecondes (1 seconde)
    });
  }
  
  async function iterateWithAsyncAwait(array) {
    for (let value of array) {
      await waitOneSecond(); 
      console.log(value); 
    }
  }
  
  iterateWithAsyncAwait([1, 2, 3]); 
  