/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

/*
Strumenti.

- console log
- let / const
- if / else
- getElementById
- for

*/

const listEl = document.getElementById('list')

for(let i = 1; i <= 100; i++){
    
    let itemEl = document.createElement("li");
    itemEl.innerHTML = i;
    
    itemEl.style.backgroundColor = "green"

    itemEl.style.listStyle = "none"
    
    itemEl.style.margin = "3px"

    itemEl.style.padding = "5px"

    itemEl.style.aspectRatio = "1 / 1"

    itemEl.style.display = "flex"

    itemEl.style.justifyContent = "center"

    itemEl.style.alignItems = "center"

    itemEl.style.fontSize = "20px"
    
    itemEl.style.fontWeight = "bold"

    listEl.append(itemEl);

    if((i % 3 === 0) && (i % 5 === 0)){
        
        itemEl.innerHTML = 'FizzBuzz'
        console.log('FizzBuzz');
    
    }else if(i % 3 === 0){

        itemEl.innerHTML = 'Fizz'
        console.log('Fizz');
    
    } else if(i % 5 === 0){
    
        itemEl.innerHTML = 'Buzz'
        console.log('Buzz');
    
    } else{
        
        itemEl.innerHTML = i;
        console.log(i);
    
    }


    if((i % 3 === 0) && (i % 5 === 0)){
        
        itemEl.style.backgroundColor = "purple"
        console.log('FizzBuzz');
    
    }else if(i % 3 === 0){

        itemEl.style.backgroundColor = "red"
        console.log('Fizz');
    
    } else if(i % 5 === 0){
    
        itemEl.style.backgroundColor = "blue"
        console.log('Buzz');
    
    }
}



