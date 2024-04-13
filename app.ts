interface item {
    name: string 
    Price: number 
}

const book: item ={
           name: "ESSENTIALTYPESCRIPT"
           price:  450
}

const mobile: item ={
    name: "OPPO"
    Price: 1000
}

console.log(`book name: ${book.name}, book price $${book.price}`)
console.log(`mobile.name: ${mobile.name}, mobile price $${mobile.price}`)