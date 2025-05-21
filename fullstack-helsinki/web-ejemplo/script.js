console.log('hola mundo')

// Variables
const firstName = 'Daniel'
const age = 30
const isStudent = true
const firstNameUpperCase = firstName.toUpperCase()
const firstNameLowerCase = firstName.toLowerCase()

console.log(firstName)
console.log(age)
console.log(isStudent)
console.log(firstNameUpperCase)
console.log(firstNameLowerCase)

// Lists
const list = []
const list2 = [1, 2, 3, 4, 5]
list.push(firstName)
list.push(age)
list.push(isStudent)
list2.push(list)

console.log(list)
console.log(list2)

// Objects
const Person = {
  firstName: 'Daniel',
  age: 25,
  isStudent: true,
  isDeveloper: true,
  links: [
    'https://www.linkedin.com/in/daniel-quiros-barroso/',
    'https://github.com/DaniQB99'
  ]
}
console.log(Person)

const field = 'firstName'
console.log(Person[field])

// Functions
const sumar = (a, b) => {
  console.log(a)
  console.log(b)
  return a + b
}

function restar (a, b) {
  return a - b
}

const op1 = 4
const op2 = 5

console.log(sumar(1, 2))
console.log(sumar(op1, op2))
console.log(restar(5, 2))

// Condicionales
if (age > 18) {
  console.log('Eres mayor de edad')
} else if (age < 18) {
  console.log('Eres menor de edad')
} else {
  console.log('Eres de edad media')
}
