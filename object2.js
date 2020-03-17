'use strict';

/* ************************
  enroll InSummer School 
**************************/
const studentData = [
	{
		name: 'Tim',
		status: 'Current student',
		course: 'Biology'
	},
	{
		name: 'Sue',
		status: 'Withdrawn',
		course: 'Mathematics'
	},
	{
		name: 'Liz',
		status: 'On leave',
		course: 'Computer science'
	}
];

function enrollInSummerSchool(students) {
	// your code here

	for (let student of students) {
		student.status = 'In Summer school';
	}
	return students;
}

console.log(enrollInSummerSchool(studentData));

/* ******************************
    Validate object keys
**********************************/

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
	id: 2,
	name: 'Jane Doe',
	age: 34,
	city: 'Chicago'
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
	id: 3,
	age: 33,
	city: 'Peoria'
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
	// your code goes here
	if (Object.keys(object).length === expectedKeys.length) {
		for (let key of expectedKeys) {
			if (key in object) {
				continue;
			} else {
				return false;
			}
		}

		return true;
	} else {
		return false;
	}
}

console.log(validateKeys(objectB, expectedKeys));
