function requeteFake(){
    const xhttp = new XMLHttpRequest;

    xhttp.onload = function(){
        reponse = JSON.parse(this.responseText);
        console.log(reponse[0]);
 
        let homeArticles = ``;
    
        for(let i = 0; i < 3; i++){
            homeArticles += `
            <div class="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-2 card" uk-scrollspy="cls:uk-animation-fade; delay: 600">
                <div class="uk-card uk-card-default uk-background-secondary uk-light">
                    <div class="uk-card-media-top">
                        <img src="../backend/${reponse[i].url}">
                    </div>
                    <div class="uk-card-body">
                        <div class="row-between container">
                            <div>${reponse[i].titre}</div>
                            <div>${reponse[i].prix}  ${reponse[i].devise}</div>
                        </div>
                    </div>
                </div>
                <span class="add-panier">Ajouter</span>
            </div>
                    
            `
        }

        document.getElementById("home-articles").innerHTML = homeArticles;

    
    };

    xhttp.open("GET", "http://localhost:3000/articles/all", true);
    xhttp.send();
}

requeteFake();