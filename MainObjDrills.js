'use strict';
const hobbit = {
	meals: [
		'breakfast',
		'second breakfast',
		'elevenses',
		'lunch',
		'afternoon tea',
		'dinner',
		'supper'
	]
};

console.log(hobbit.meals[3]);

const persons = [
	{ name: 'Jane Doe', jobTitle: 'Teacher' },
	{ name: 'Sam Jacob', jobTitle: 'Nurse', boss: 'Frank White' },
	{ name: 'Lucy Anna', jobTitle: 'Dctor', boss: 'Dee Dee' },
	{ name: 'Mary Jude', jobTitle: 'Software Developer', boss: 'Cesar Mark' },
	{ name: 'James Simth', jobTitle: 'Engineer' }
];

persons.forEach(person =>
	console.log(`${person.name}, Job = ${person.jobTitle}`)
);

persons.forEach(person =>
	person.boss
		? console.log(
				`${person.jobTitle} ${person.name} reports to ${person.boss}.`
		  )
		: console.log(
				`${person.jobTitle} ${person.name} doesn't report to anybody.`
		  )
);

/* ********************************
      Cracking the code
************************************/

const decode = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
};

const decodeWords = words => {
	let words_1 = words.split(' ');
	let decoded = '';

	words_1.map(word => {
		let search = word[0];
		word[0] in decode ? (decoded += word[decode[search]]) : (decoded += ' ');
	});
	return decoded;
};

console.log(decodeWords('craft block argon meter bells brown croon droop'));
