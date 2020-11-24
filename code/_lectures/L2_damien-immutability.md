# Immutability
...with Damien. What it means and how to think with it in mind when writing JS. 

It you set a new var with a name of array. array.push("Hello"), we've MUTATED it. 

Immutability is the concept of turning something which CAN'T be muted.  

**EXAMPLE 1**
const age = 1
const personAge = age
age += 1

console.log(age)          //2
console.log(personAge)    //will print 1. 

**EXAMPLE 2**
const people = ["bob", "sue"]
const allPeople = people
people.push("jane")

console.log(people)       //["bob", "sue", "jane"]
console.log(allPeople)    //["bob", "sue", "jane"]

---

In the first example, we had a number – a primitive (strings, numbers, etc.). When we mutate these things, references don't update. In the 2nd example, an array is an object – and JS carries references to objects. KEEP THIS IN MIND.

In redux, you never mutate the state directly. We're using Redux Toolkit – comes bundled with immutability bundle called imr. It will prevent us from writing mutable code. Check the imr documentation. 

The takeaway is to just be aware that we have to follow imr rules within our reducers. 
i)  Mutability can lead to unpr behaviour and bugs. 
ii) Redux toolkit comes with imr which makes out redux store immutable. Sometimes we need to write code outside our reducers which modifies our state in a particular way that imr is happy with. 