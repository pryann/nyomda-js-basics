class User {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const UserFactory = (firstName, lastName) => ({
  firstName,
  lastName
})

const user = new User('Gergely', 'Gáll')
console.log(user)

const userWithFactory = UserFactory('Gergely', 'Gáll')
