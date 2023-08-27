//Mettre le code JavaScript lié à la page photographer.html

//Si l'URL de votre page est https://example.com/?nom=Jonathan%20Smith&age=18 vous pouvez extraire les paramètres 'nom' et 'age' en utilisant:
// L'url de ma page est : http://127.0.0.1:5501/photographer.html?id=243


//let params = new URL(document.location).searchParams;
//let name = params.get("nom"); // la chaine de caractère "Jonathan Smith".
//let age = parseInt(params.get("age")); // le nombre 18

let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);

