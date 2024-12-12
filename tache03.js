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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({ data: "Voici les données de l'API" }); // Simule une réponse de l'API
        } else {
          reject(new Error("Échec de l'appel à l'API")); // Simule une erreur
        }
      }, 2000); // Simule un délai de 2 secondes
    });
  }
  
  // Fonction principale pour attendre un appel et gérer les erreurs
  async function awaitCall() {
    try {
      console.log("Appel de l'API en cours...");
      const response = await simulateApiCall(); // Attendre la réponse de l'API
      console.log("Données reçues:", response.data); // Afficher les données reçues
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message); // Afficher un message d'erreur convivial
    }
  }
  
  // Exemple d'utilisation
  const values = ["A", "B", "C", "D"];
  iterateWithAsyncAwait(values);
  awaitCall();
  