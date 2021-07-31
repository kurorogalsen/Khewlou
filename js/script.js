function requeteFake(){
    const xhttp = new XMLHttpRequest;

    xhttp.onload = function(){
        reponse = JSON.parse(this.responseText);
        console.log(reponse[0]);
    };

    xhttp.open("GET", "https://fakestoreapi.com/products/", true);
    xhttp.send();
}

requeteFake();