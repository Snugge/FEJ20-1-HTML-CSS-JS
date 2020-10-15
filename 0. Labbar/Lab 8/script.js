

// Del 1
const names = ['Kalle', 'Palle', 'Valle', 'Nalle', 'Jalle']


console.log('Alla ' + names);

// #1:
// Ta bort i slutet av en array
names.pop();
console.log('Ta Bort i Slutet, POP: ' +names);

// #2:
// Ändra ett epecifikt värde
names[1] = 'NYTT NAMN';
console.log('Ändrat Namn: ' + names);

// #3:
// Lägga till i slutet av en array
names.push('Joakim');
console.log('Lägger till namn, PUSH: ' + names);



// #4:
// Sortera i bokstavsordning
names.sort();
console.log('Efter sortering:' + names);


// 5:
// Kolla vilken position ett värde har
console.log('Kolla index i en Array: ' + names.indexOf('Joakim'));

// #6:
// Ta bort ett spicifikt värde, oavsett var i arrayen det finns

// leta rätt på joakim
let pos = names.indexOf('Joakim');
//console.log(pos);

// Ta Bort värdet på positionen
names.splice(pos, 1);

console.log('Justerade namn: ' + names);


// #7:
// Loopa igenom och skriv ut alla namn i Arrayen

// Loop alt 1
for(let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

// Loop alt 2
for( name of names) {
    console.log(name);
}