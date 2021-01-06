//search profiles
function filternames() {
    let profile = document.getElementById('search').value;   // inputfeld wird ausgelesen und in Variable profile gespeichert
    profile = profile.toLowerCase();                          // die Buchstaben aus der Variable profile werden in Kleinbuchstaben konvertiert
    let account = document.getElementById('searchfield');   // das Suchfeld wird in der Variable account deklariert   
    account.innerHTML = "";                                 // Suchfeld wird gelöscht damit nicht bei jedem tippen erneut das Feld gefüllt wird


    for (let i = 0; i < accounts.length; i++) {             // eine Schleife als Zähler wird erstellt und der Variablen account wird das Objekt accounts[i] zugeordnet
        const account = accounts[i];

        if (account['name'].toLowerCase().includes(profile)) {                                              //Bestimmtung: wenn die Kleinbuchstaben von dem Objekt account['name'] übereinstimmt mit den Kleinbuchstaben aus dem SUchfeld 
            document.getElementById('searchfield').innerHTML += `<a href="javascript:;" >${account['name']}</a>`; //Schreibe ins Suchfeld die Variable account['name']
        }
    }
}