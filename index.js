/*creation cards */

let cardsProduct = document.getElementById("cardsProduct");

let container = document.getElementById("container");

fetch("http://localhost:3000/api/cameras")
.then (function(response){
    return response.json()
})  

.then( function(listeProduct){
    console.log(listeProduct);/*attention*/
  for(let product of listeProduct){
      let camera = new Cameras(product)
    function display(product){
        container.innerHTML +=
    `<article id="cardsProduct" class="produit">
        <img src=${product.imageUrl} alt="" />
      
        <h2> ${product.name}</h2>
        <p>${product.price/100}€</p>
      
        <p>${product.description}</p>
        
        <a id="clicks" href="/frontend/pages/produit.html"> En savoir plus</a>
    </article>`
 }
 display(camera);
  }

  });


