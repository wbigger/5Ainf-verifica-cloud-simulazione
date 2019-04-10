# SIMULAZIONE VERIFICA TPSI: HTML, CSS, JS, Cloud

Benvenuti alla verifica scritta di TPSI. Buon lavoro!

Il progetto di riferimento svolto in classe per l'esecuzione di questo compito è [bar-prof](https://github.com/marconicivitavecchia-bar/bar-prof).

## Esecuzione del compito
Il compito è diviso in tre fasi:
1. rendere dinamica la pagina con esecuzione locale sulla propria macchina
2. eseguire la web app sulla Raspberry del docente
3. eseguire la web app in cloud con AWS

Operazioni preliminari:
- [ ] accedete con il vostro account personale a GitHub (**non sbagliate password!**)
- [ ] fate il fork di questo progetto
- [ ] copiate l'URL del **vostro** progetto
- [ ] aprite Visual Studio Code
- [ ] fate il clone del progetto
- [ ] su Visual Studio Code, scaricate (se non è già presente) l'estensione Live Server, cliccando sull'icona "Extensions" nella barra verticale a sinistra
- [ ] dopo aver installato l'estensione Live Server, deve comparire il pulsante "Go Live" nella barra blu in basso, premerci sopra per aprire la pagina
- [ ] a questo punto avete la pagina di riferimento aperta sul vostro browser e potete cominciare lo sviluppo seguendo i punti nella sezione successiva

Accesso alla Raspberry:
- [ ] aprite un terminale (git-bash su Windows)
- [ ] accedete via ssh alla Raspberry con l'indirizzo che vi specificherà il docente
- [ ] create una cartella con il vostro cognome (tutto minuscolo, senza spazi) ed entrateci dentro
- [ ] fate il clone del progetto e svolgete i punti indicati nella sezione successiva

Accesso ad AWS:
- [ ] seguite i punti sulla [guida del cloud deployment](https://wbigger.github.io/book-html5/deploy/cloud.html#deploy) e svolgete i punti della sezione successiva

Quando avete finito e **comunque 5 minuti prima** dello scadere del tempo (vi verrà ricordato dal docente), dovete pubblicare il codice seguendo la solita procedura:
- [ ] salvate il vostro codice
- [ ] da Visual Studio Code (o da terminale, se preferite) aggiungete tutti i file modificati allo staging
- [ ] fate il commit del file con un commento **significativo**, vi ricordo che per convenzione il commento deve cominciare con un verbo e descrivere cosa si sta facendo
- [ ] pubblicate il codice facendo il push
- [ ] rispondete alla issue sul mio repository originale con il testo "Consegnato" e con il materiale specificato nella sezione successiva

# Calcolo del punteggio
Tutte le seguenti voci valgono **1 punto**. 

Punti generali:
- [ ] corretta indentazione di tutti i file
- [ ] codice che compila senza errori nella console del browser
- [ ] chiarezza del codice (commenti, identificativi, etc.)

Punti progetto:
- [ ] file JSON compilato correttamente
- [ ] codice JavaScript che itera sul file JSON
- [ ] una card visualizzata correttamente
- [ ] tutte le card visualizzate correttamente
- [ ] il file `index.html` originale e quello generato da voi sono _perfettamente identici_

Punti Raspberry:
- [ ] istanza su AWS creata ed accessibile
- [ ] istanza su AWS che visualizza lo stesso codice locale
- [ ] screenshots delle prestazioni di caricamento della pagina sia su AWS che in locale

Punti AWS:
- [ ] istanza su AWS creata ed accessibile
- [ ] istanza su AWS che visualizza lo stesso codice locale
- [ ] screenshots delle prestazioni di caricamento della pagina sia su AWS che in locale

Totale punti (generali+progetto): 20

Sufficienza: 11

Per avere il massimo del voto bisogna avere il massimo del punteggio.

# Note generali
Testate il vostro progetto il più spesso possibile per controllare che non sia corretto.

È utile per me (ma non obbligatorio) che spuntiate le caselle qui sopra, mi servono per capire cosa avete fatto e cosa no. Per spuntarle, modificate il file (da interfaccia web o in locale sul vostro computer) e aggiungete una X tra le parentesi quadre, così:
- [X] voce spuntata

**È possibile** consultare il progetto di esempio che è stato fornito durante la lezione.

Al contrario, **non è possibile** comunicare o copiare dai compagni di classe.
