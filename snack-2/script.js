function lanciaDado(result) {
    return new Promise((resolve, reject) => {

        // Check if the chosen number is valid (must be between 1 and 6)

        if (result < 1 || result > 6) {
            reject("Numero non valido! Inserire un numero da 1 a 6.");
            return;
        }

        // Showing choosen number 
        console.log(`Hai scelto il numero : ${result}`);

        console.log('Il dado è stato lanciato...');



        setTimeout(() => {

            // simulating 20% chance of error 

            const incastro = Math.random() < 0.2;

            if (incastro) {
                reject(" Il dado è incastrato, riprova!");
                return;
            }

            // Generate a random number between 1 and 6 (dice result)

            const numeroDado = Math.floor(Math.random() * 6) + 1;
            console.log('È uscito:', numeroDado);

            // Check if the result matches the chosen number

            if (numeroDado === result) {

                resolve(`Complimenti! È uscito ${numeroDado}`);
            }
            else {
                reject(`Sbagliato! È uscito ${numeroDado} , avevi scelto ${result}`);
            }
        }, 3000);

    })
}

lanciaDado(3)
    .then(message => console.log(message))
    .catch(error => console.error(error));