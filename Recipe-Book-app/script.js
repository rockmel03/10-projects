const apiKey = '3de55fd05aef4b2ea7f616bd25cf982f'


async function getRecipe() {
    const Recipe = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`)
    const Data = await Recipe.json()
    console.log(Data)
    return Data.recipes
}
async function updateData() {

    const Data = await getRecipe();

    Data.forEach(data => {
        let recipeDiv = document.createElement('div')
        recipeDiv.classList.add('recipe')
        recipeDiv.id = data.id

        let recipeImg = document.createElement('img');
        recipeImg.src = data.image
        recipeImg.alt = 'recipe-Img';

        let recipeH2 = document.createElement('h2');
        recipeH2.innerHTML = data.title;

        let rcecipePara = document.createElement('p');
        let recipeStorng = document.createElement('strong');
        recipeStorng.innerText = "Ingredients : ";

        let recipeIngredients = document.createElement('span');
        recipeIngredients.innerHTML = data.extendedIngredients.map((i) => i.name);
        rcecipePara.appendChild(recipeStorng)
        rcecipePara.appendChild(recipeIngredients)

        let Button = document.createElement('a');
        Button.id = 'view-recipe-btn';
        Button.href = data.sourceUrl
        Button.innerText = 'view recipe';
        
        recipeDiv.appendChild(recipeImg);
        recipeDiv.appendChild(recipeH2);
        recipeDiv.appendChild(rcecipePara);
        recipeDiv.appendChild(Button);
        document.querySelector('.recipe-container').appendChild(recipeDiv)
    });


}
updateData()

document.querySelector('#load-more').addEventListener('click',()=>{
    updateData()
})
