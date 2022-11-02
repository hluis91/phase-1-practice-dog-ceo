//Global variables
const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("#breed-dropdown")
let breedsArray;
//Event Listeners
ulContainer.addEventListener('click', handleClick)
dropdown.addEventListener('change', handleChange)
// //Challenge 1
function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderImgs(imgsArray) 
    })
}

function createImgElement(imgs){
    return imgs.map((img) => {
        let i =`<img src=${img}>`
        return i
    })
}

function renderImgs(imgsArray){
    imgsArray.forEach(element => {
        renderElement(element)
    })
}

function renderElement(element) {
    ulContainer.innerHTML += element
}


//Challenge 2

function getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis) 
    })
}

function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li =`<li>${breed}</li>`
        return li
    })
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    })
}

// challenge 3

function handleClick(event){
    event.target.style.color = 'blue'
}

//challenge 4
function handleChange(event){
    const letter = event.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLis)
}

getImages()
getBreeds()