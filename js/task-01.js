// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// const navEl = document.querySelector('li');
// console.log(navEl);


const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);


const items = document.querySelectorAll(".item");
items.forEach(item => {
    console.log(`Category: ${ item.querySelector("h2").textContent }`);
    console.log(`Elements: ${ item.querySelectorAll("li").length }`);
})

