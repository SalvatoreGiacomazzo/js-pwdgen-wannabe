console.log('JS OK');

//Creare un generatore di password in base a Nome, Cognome e Colore Preferito dell'utente + 21

/*TO DO LIST
1. Prendere il nostro elemento di interesse dal DOM;
2. Acquisizione del nome dell'utente;
3. Acquisizione del cognome dell'utente;
4. Acquisizione del colore preferito dell'utente;
5. Aggiungere "21";
6. Generazione password personalizzata;
*/ 

/*Utility character/* 
`


/*Fase di preparazione  */ 
const resultElement = document.getElementById('password-displayer') 
console.log(resultElement)


/*Fase di acquisizione dei dati*/ 
const firstName = prompt('Qual è il tuo nome?', 'salvatore')
console.log('firstName')

const lastName = prompt('Qual è il tuo cognome?', 'giacomazzo')
console.log('lastName')

const favColor = prompt('Qual è il tuo colore preferito?', 'grigio')
console.log('favColor')
/*Fase di elaborazione dei dati */ 
const password = firstName + lastName + favColor + parseInt('21');
console.log('password')


/*Produzione risultato */ 
resultElement.innerText = `La tua password è ${firstName}${lastName}${favColor}${parseInt('21')}`
