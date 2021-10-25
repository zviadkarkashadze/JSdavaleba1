//დავალება 1

let user = {
  firstname: 'giorgi',
  lastname: 'smith',
  age: 25,
  studentstatus: 'active'
};

delete user.studentstatus

console.log(user);


//დავალება 2

let users = ['nika', 'nana', 'maka', 'gio']

for (let x = 0; x < users.length; x++) {
  console.log(users[x]);
}

let index = 0;
while (index < users.length) {
  console.log(users[index]);
  index++;
}

//დავალება 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let x = 0; x < numbers.length; x++) {
  if (numbers[x]>5) {
        console.log(numbers[x]);
  }
};

//დავალება 4

let users =  [
  {username:'test1', status: false},
  {username:'test2', status: false},
  {username:'test3', status: true}
];

// console.log(users[2].status)

//დავალება 5 (ვერ გავაკეთე)

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let x = 0; x < arr.length; x++){
  if(arr[1]>0) {
    console.log(arr[x]);
  }
};

//დავალება 6

let x = 6;
let y = '6';

condole.log(6 === '6'); 
// false რადგან არ ხდება სტინგის რიცხვად გადაყვანის კონვერატაცია

//დავალება 7

let array = ["html", "css", "bootstrap", "javascript","python"];
for (let i = 0; i < array.length; i++) {
  if (array[i].length > 5 && array[i].includes('ava')); {
      console.log(array[i]);
  }
}

//დავალება 8

let User = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (User.age > 18 && User.studentStatus === 'active') {
  console.log('hello');
} else if (User.name === 'giorgi') {
  console.log('hello giorgi');
} else if (User.studentstatus === 'active' || User.age < 25) {
  console.log('hello world');
} else {
  console.log('error');
}

//დავალება 9 ესეც ვერ გავაკეთე

let array = [watermelon, pear, 10, 45, 50, 'apple', 'ananas' ];

for (let i = 0; i == array.length; i++) { 
       
    console.log(array[i]);
}
