'use strict';
/* eslint-disable no-unused-expressions */
/* Object initializer and methods */
const loaf = {
	flour: 300,
	water: 210,
	hydration: function() {
		return (this.water / this.flour) * 100;
	}
};
console.log(loaf.flour, loaf.water);
console.log(loaf.hydration);

/* Iterating over an object prop */

const newObj = {
	foo: 'hello',
	bar: 'there',
	fum: 'friend',
	quux: 'how',
	spam: 'are you'
};

function loopOver(obj) {
	for (const key in obj) {
		console.log(`Property name is ${key} and its value is ${obj[key]}`);
	}
}
console.log(loopOver(newObj));

/* Factory functions with LOTR */

function CreateCharacter(name, nickname, race, origin, attack, defense) {
	(this.name = name),
		(this.nickname = nickname),
		(this.race = race),
		(this.origin = origin),
		(this.attack = attack),
		(this.defense = defense);
	this.describe = function() {
		return `${name} is a ${race} from ${origin}`;
	};
	this.evaluateFight = function(character) {
		return `Your opponent takes ${attack - defense} and you receive ${defense -
			attack} `;
	};
}
const char1 = new CreateCharacter(
	'Gandalf the white',
	'gandlf',
	'wizard',
	'middle earth',
	10,
	6
);
const char2 = new CreateCharacter(
	'bilbo baggins',
	'bilbo',
	'hobbit',
	'the shire',
	2,
	1
);
const char3 = new CreateCharacter(
	'frodo baggins',
	'frodo',
	'hobbit',
	'the shire',
	3,
	2
);
const char4 = new CreateCharacter(
	'aragorn son of arathorn',
	'aragorn',
	'man',
	'dunnedain',
	6,
	8
);
const char5 = new CreateCharacter(
	'legolas',
	'legolas',
	'elf',
	'woodland realm',
	8,
	5
);

const characters = [char1, char2, char3, char4, char5];

characters
	.find(function(index) {
		return index.nickname === 'aragorn';
	})
	.describe();

characters.filter(function(index) {
	return index.attack > 5;
});

characters.filter(function(index) {
	return index.race === 'hobbit';
});

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
