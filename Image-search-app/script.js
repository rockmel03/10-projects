let apiKey = '0BMxFx3Wld_o39161qsn8aN8_Y1-ytPbMjVGlQjFP_k';

const searchbarEl = document.querySelector('.search-bar');
const searchInputEl = document.querySelector('#search-id');
const searchResultsEl = document.querySelector('.search-results');
const showMoreBtn = document.querySelector('#show-more-btn');

let inputData = "";
let page = 1;

async function searchImages(){

    if(page === 1){
        searchResultsEl.innerHTML = '';
    }

    inputData = searchInputEl.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    
    let response = await fetch(url);
    let data = await response.json();
    
    const results = data.results;

    results.map((result)=>{
        let imgwrapper = document.createElement('div');
        imgwrapper.classList.add('search-result');
    
        let imageEl = document.createElement('img');
        imageEl.src = result.urls.small ;
        imageEl.alt = result.alt_description
    
        let imgDescription = document.createElement('a');
        imgDescription.href = result.links.html;
        imgDescription.textContent = result.alt_description 
        imgDescription.target = '_blank'

        imgwrapper.appendChild(imageEl)
        imgwrapper.appendChild(imgDescription)

        searchResultsEl.appendChild(imgwrapper)
    })
    
    page++;
    if(page > 1){
        showMoreBtn.style.display = 'block';
    }
}

searchbarEl.addEventListener('submit',(e)=>{  
    e.preventDefault();
    searchResultsEl.innerHTML = '';
    searchImages();

})

showMoreBtn.addEventListener('click',()=>{
    searchImages();
})