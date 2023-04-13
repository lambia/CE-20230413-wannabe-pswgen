//Creiamo tre variabili che indicano se l'utente ha inserito correttamente i dati
//Al momento non è stato ancora inserito nulla, quindi le settiamo a FALSE
let nomeOk = false;
let cognomeOk = false;
let coloreOk = false;

//Chiediamo il nome all'utente
let nome = prompt("Inserisci il tuo nome");

//Se l'utente ha cliccato su CANCEL nome=null, se non ha scritto nulla nome=""
//Se UNA di queste due condizioni si verifica, avvisiamo l'utente
if (nome == null || nome == "") {
    alert("Non hai inserito un nome");
    //Se invece l'utente ha inserito un nome, controlliamo che non sia troppo corto
} else if (nome.length < 2) {
    alert("Il nome è troppo corto");
    //Se invece l'utente ha inserito un nome lungo almeno 2 caratteri...
} else {
    console.log("L'utente ha inserito un nome valido");
    //nomeOk = !nomeOk;
    nomeOk = true; //Settiamo a TRUE la nostra variabilina di riferimento
}

let cognome = prompt("Inserisci il tuo cognome");

if (cognome == null || cognome == "") {
    alert("Non hai inserito un cognome");
} else if (cognome.length < 2) {
    alert("Il cognome è troppo corto");
} else {
    console.log("L'utente ha inserito un cognome valido");
    cognomeOk = true;
}

let colore = prompt("Inserisci il tuo colore preferito");

if (colore == null || colore == "") {
    alert("Non hai inserito un colore");
} else if (colore.length < 2) {
    alert("Il colore è troppo corto");
} else {
    console.log("L'utente ha inserito un colore valido");
    coloreOk = true;
}

//Se tutti e tre i dati sono "OK" (cioè non nulli, non stringhe vuote e lunghi almeno 2 caratteri)
//Allora generiamo la password
if (nomeOk && cognomeOk && coloreOk) {

    // let password = nome + "-" + cognome + "-" + colore + "-2023";
    let password = `${nome}-${cognome}-${colore}-2023`;

    // document.querySelector("#password").innerText = password;
    document.getElementById("password").innerText = password;

    console.log("La nuova password è: ", password);

    //Altrimenti, avvisiamo l'utente sia in pagina che in console
} else {

    document.getElementById("password").innerText = "Nessuna password per te, ricarica la pagina e inserisci i dati.";

    console.error("Impossibile generare una password: dati mancanti.");

    //Controlliamo che nome/cognome/colore siano mancanti e stampiamo in console
    //Lo facciamo separatamente, senza usare ELSE (ricordate perchè!)
    if (!nomeOk) {
        console.error("Nome mancante!");
    }

    if (!cognomeOk) {
        console.error("Cognome mancante!");
    }

    if (!coloreOk) {
        console.error("Colore mancante!");
    }

}

