import { CardComponent } from "../components/CardComponents.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector('#renderArea')

// // products.map((product) => (renderArea.innerHTML = CardComponent(product)))
products.map((product) => (renderArea.innerHTML += CardComponent(product))) 


//To specific number of product and product will show 12 elements
// products
//     .splice(0, 12)
//     .map((products) => (renderArea.innerHTML) += CardComponent(products))
