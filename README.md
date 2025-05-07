
# Interview Questions - Blog Task



## Answer: What is the use of the keyof keyword in TypeScript? 

The **keyof** keyword in TypeScript is used to extract the keys of a type as a union of string literal types. This allows for type-safe access to object properties and is particularly useful when working with generic types or when you need to ensure that a property name is valid for a given type.

Example:




```bash
 interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonItems = keyof Person; // "name" | "age" | "location"

function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
  return obj[key];
}

const person: Person = {
  name: "Hassan Nahid",
  age: 20,
  location: "Sirajganj"
};

const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number
const location = getProperty(person, "location"); // string

```
In this example, keyof Person creates a union type of **"name" | "age" | "location"**. The getProperty function uses this to ensure that the key argument is a valid key of the obj argument. 

## Answer: Provide an example of using union and intersection types in TypeScript.
### 1. Union Types
A union type allows a variable to be one of several types. You can define a union type using the | operator.

Example:
```
function printId(id: number | string) {
  console.log(`The ID is: ${id}`);
}

printId(123);     // Output: The ID is: 123
printId("abc");   // Output: The ID is: abc

```
In this example the id can either be a number or a string and the function works regardless of whether id is a number or a string.

### 1. Intersection Types 
An intersection type combines multiple types into one. It means that the value must satisfy all the types involved in the intersection. You can define an intersection type using the & operator.
Example:

```
interface Person {
  name: string;
  age: number;
}

interface Worker {
  jobTitle: string;
}

type Employee = Person & Worker;

const employee: Employee = {
  name: "Hassan Nahid",
  age: 20,
  jobTitle: "Developer",
};

console.log(employee); 
// Output: { name: 'Hassan Nahid', age: 20, jobTitle: 'Developer'}

```
In this Example the Employee type is an intersection of the Person and Worker types. The employee variable must have all properties of both types (name, age and jobTitle).