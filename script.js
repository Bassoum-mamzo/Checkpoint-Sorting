function insertionSort(arr) {
    // Parcourt tout le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // Sauvegarde l'élément actuel à insérer
        let current = arr[i];
        
        // Détermine la position où insérer cet élément dans la partie triée
        let j = i - 1;
        // Boucle pour déplacer les éléments plus grands que 'current' vers la droite
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insère l'élément actuel à sa place correcte
        arr[j + 1] = current;
    }
    return arr; // Renvoie le tableau trié
}

// Exemple d'utilisation
const tableau = [29, 10, 14, 37, 13];
console.log(insertionSort(tableau)); // [10, 13, 14, 29, 37]
