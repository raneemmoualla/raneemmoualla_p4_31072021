//selectione la balise html dans le dom
const container = document.getElementById('container');

//APPEL API AVEC FETCH
fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())  
    .then(function (listeProduct)
    {
    console.log(listeProduct);
   
        
    }
    )  
    
   