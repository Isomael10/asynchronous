// Fonction pour attendre 1 seconde
function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Attend 1000 millisecondes (1 seconde)
    });
  }
  
  // Fonction principale qui itère avec Async/Await
  async function iterateWithAsyncAwait(array) {
    for (let value of array) { // Parcourir chaque élément du tableau
      await waitOneSecond(); // Attendre 1 seconde
      console.log(value); // Afficher la valeur actuelle
    }
  }
  
  // Fonction pour simuler un appel API
  function simulateApiCall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Voici les données de l'API" }); // Simule une réponse de l'API
      }, 2000); // Simule un délai de 2 secondes
    });
  }
  
  // Fonction principale pour attendre un appel
  async function awaitCall() {
    console.log("Appel de l'API en cours...");
    const response = await simulateApiCall(); // Attendre la réponse de l'API
    console.log("Données reçues:", response.data); // Afficher les données reçues
  }
  
  // Exemple d'utilisation
  const values = ["A", "B", "C", "D"];
  iterateWithAsyncAwait(values);
  awaitCall();
  