alert('atsagiai, knygos');

let books = [
	{isbn: 1234, leidimas: 1980, pav: 'knyga vaikam', psl: 120, zanras: 'grozine literatura'},
	{isbn: 1123233, leidimas: 2016, pav: 'knyga tevam', psl: 400, zanras: 'grozine literatura' },
	{isbn: 1236, leidimas: 2014, pav: 'knyga siaip', psl: 50, zanras: 'grozine literatura' },
	{isbn: 12544, leidimas: 2000, pav: 'geografija', psl: 100, zanras: 'grozine literatura' },
	{isbn: 1234, leidimas: 1963, pav: 'knyga vaikam 5', psl: 300, zanras: 'biografijos' },
	{isbn: 123344, leidimas: 1544, pav: 'asdaw', psl: 900, zanras: 'biografijos' },
	{isbn: 1212334, leidimas: 1222, pav: 'tavo obuolys', psl: 120, zanras: 'biografijos' },
	{isbn: 551234, leidimas: 1065, pav: 'klasika', psl: 180, zanras: 'biografijos' },
	{isbn: 1223434, leidimas: 2020, pav: 'karbonadas', psl: 152, zanras: 'biografijos' },
	{isbn: 21234, leidimas: 2017, pav: 'ant stalo neptunas', psl: 77, zanras: 'biografijos' },
	{isbn: 1234, leidimas: 2014, pav: 'skruzdes', psl: 133, zanras: 'enciklopedija' },
	{isbn: 121234, leidimas: 1987, pav: 'bukas', psl: 666, zanras: 'enciklopedija' },
	{isbn: 321234, leidimas: 1888, pav: 'tortas', psl: 120, zanras: 'enciklopedija' }
]
let grozine = books.filter((book) => {
	return book.zanras === 'grozine literatura'
})
let bio = books.filter((book) => {
	return book.zanras === 'biografijos'
})
let encik = books.filter((book) => {
	return book.zanras === 'enciklopedija'
})
//console.log("Grozine literatura:", grozine, "enciklopedijos:", encik, "biografijos:", bio)
for(let i = 0; i < books.length; i++) {
	console.log(books[i])
}