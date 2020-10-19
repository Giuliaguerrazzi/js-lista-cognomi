
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

var cognome = prompt('Il tuo cognome è sulla lista?');

listaCognomi.push(cognome);

listaCognomi.sort();

  var items = '';

for (var i = 0; i < listaCognomi.length; i++) {
  var item = listaCognomi[i];

  items += '<li>' + item + '</li>';
}

document.getElementById('username-list').innerHTML = items;

document.getElementById('result').innerHTML = 'Il tuo cognome è il numero ' + (listaCognomi.indexOf(cognome) + 1);


console.log(listaCognomi);
