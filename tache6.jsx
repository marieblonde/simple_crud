// 1. Je pense que console.log(count) apres 5s va aficher les erreurs 

// 2. Identifions et expliquons les pieges:
// - La variable compter utiliser dans la fonction setInterval() n'est pas definit dans le code dont je pense a une erreur de syntaxe car la seule variable definit est count
// - La variable count est definit uniquement dans createCounter() pourtant setTimeout() fait appel a celle ci donc je dirait une erreur de portee de la dite variable(not defined)

// 3. Modifions le code pour qu'il n'y ait pas d'erreur
function createCounter() {
    let count = 0; 

    setInterval(() => {
        count++; 
        console.log(count);
    }, 1000);

    setTimeout(() => {
        console.log("Valeur après 5s :", count); 
    }, 5000);
}

createCounter();