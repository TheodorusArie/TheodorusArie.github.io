let gantiGambar = document.getElementById('gambar');
let title = document.getElementById('title').innerHTML;
let articleIngredients = document.getElementById('articleIngredients');
let articleMethods = document.getElementById('articleMethods');
let articleSeasonandServe = document.getElementById('articleSeasonandServe');
let articleSauces = document.getElementById('articleSauces');
let counter = 1;
function prev(){
    counter--;
    if(counter === 0){
        counter = 3;
    }
    let image = `img/${title}-${counter}.jpg`;
    gantiGambar.src = image;
}
function next(){
    counter++;
    if(counter === 4){
        counter = 1;
    }
    let image = `img/${title}-${counter}.jpg`;
    gantiGambar.src = image;
}
function showIngredients(){
    let showDetails = `""`
    articleIngredients.style = showDetails;
}
function hideIngredients(){
    let showDetails = `display:none`
    articleIngredients.style = showDetails;
}
function showMethods(){
    let showDetails = `""`
    articleMethods.style = showDetails;
}
function hideMethods(){
    let showDetails = `display:none`
    articleMethods.style = showDetails;
}
function showSauces(){
    let showDetails = `""`
    articleSauces.style = showDetails;
}
function hideSauces(){
    let showDetails = `display:none`
    articleSauces.style = showDetails;
}
function showSeasonandServe(){
    let showDetails = `""`
    articleSeasonandServe.style = showDetails;
}
function hideSeasonandServe(){
    let showDetails = `display:none`
    articleSeasonandServe.style = showDetails;
}