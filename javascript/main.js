
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
listaCognomi.sort();

// var cognome = prompt('Il tuo cognome è sulla lista?');

  var items = '';

for (var i = 0; i < listaCognomi.lenght; i++) {
  var item = listaCognomi[i];

  items += '<li>' + item + '</li>';

}

document.getElementById('username-list').innerHTML = items;

console.log(listaCognomi);
