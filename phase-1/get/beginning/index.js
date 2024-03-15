/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/
//fetch
//create = POST
// Read = GET
//Update = PATCH
// Dlete = DELETE

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is apromise, so we'll use .then() to handle its successful state
// //JSON JavaScript Object Notation . we convert it into JS uising response.json
.then(response => response.json())
// u can call fact whatever u want
.then(fact => {
    document.querySelector("#cat").textContent = fact.text;
    console.log(fact)})
// fetch is apromise, so we'll use .catch() to handle its unsuccessful state
.catch(error => console.log(error))
// A synchronous request to https://anapioficeandfire.com/api/books.
fetch(" https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books => {
    books.forEach(book => {
        const li = document.createElement("li")
        li.textContent = book.name
        //parent.append(child)
        // appendChild("li") lets append only one, append("li","li") lets u append mutiple elements
        document.querySelector("#got").append(li)
    });
    
})
// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json()
    console.log(pokemon)
    document.querySelector("#pokemon").textContent = pokemon.name;
}
getPokemon("ditto");
// ~ Challenge: Make a GET request to an API of your choice!
