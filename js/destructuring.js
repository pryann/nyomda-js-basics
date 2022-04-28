let a = 10
let b = 20;
[a, b] = [b, a]

const user = {
  firstName: 'Gergely',
  lastName: 'Gáll',
  age: 38
}

// const age = user.age
// const firstName = user.firstName
// const lastName = user.lastName

const { firstName, lastName } = user
console.log(firstName, lastName)

const {
  firstName: f,
  lastName: l, job:
  j = 'teacher'
} = user

console.log(f, l, j)

// function sayMyName (firstName = 'Gergely', lastName = 'Gáll') {
//   console.log(`You are ${firstName} ${lastName}.`)
// }

function sayMyName ({ firstName = 'Péter', lastName = 'Gáll' } = {}) {
  console.log(`You are ${firstName} ${lastName}.`)
}

// function sayMyName(user = {}) {
//   const {firstName = 'Péter', lastName = 'Gáll'} = user
//   console.log(`You are ${firstName} ${lastName}.`)
// }

// delete user.firstName
sayMyName()

const { age, ...userNames } = user
console.log(age, userNames)
