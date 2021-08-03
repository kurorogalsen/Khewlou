function envoiPOST(){const xhr = new XMLHttpRequest();

xhr.open('POST', "http://localhost:3000/article/new");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

let title = document.getElementById("article-title").value;
let prix = document.getElementById("article-prix").value;
let categorie = document.getElementById("article-categorie").value;
let devise = document.getElementById("article-devise").value;

let message = `titre="${title}"&prix="${prix}"&categorie="${categorie}"&devise="${devise}"`;
console.log(message);
xhr.send(encodeURI(message));
}
document.getElementById("article-submit").addEventListener("click", envoiPOST);