'use strict';

function createMyObject() {
	const obj = {
		foo: 'bar',
		answerToUniverse: 42,
		'olly olly': 'oxen free',
		sayHello: function() {
			return 'hello';
		}
	};
	return obj;
}

function updateObject(obj) {
	obj.foo = 'foo';
	obj.bar = 'bar';
	obj.bizz = 'bizz';
	obj.bang = 'bang';
}

function personMaker() {
	var person = {
		firstName: 'Paul',
		lastName: 'Jones',
		// replace `null` with a function that uses self reference to return
		// full name
		fullName() {
			return `${this.firstName} ${this.lastName}`;
		}
	};
	return person;
}

const jack = personMaker('Jack', 'Simth');

console.log(jack.fullName());

/* *******************************
        Key Deleter
***********************************/

const sampleObj = {
	foo: 'foo',
	bar: 'bar',
	bizz: 'bizz',
	bang: 'bang'
};

function keyDeleter(obj) {
	// your code here
	if (obj.foo) {
		delete obj.foo;
	}
	if (obj.bar) {
		delete obj.bar;
	}

	return obj;
}

console.log(keyDeleter(sampleObj));
