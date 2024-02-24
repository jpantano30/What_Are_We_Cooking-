document.addEventListener('DOMContentLoaded', () => {
const app_id = 'f674e30b'
const app_key = '6560b677fd0aed4b118c0e7d7d2d3240'
const endPoint = 'https://api.edamam.com/api/recipes/v2'



const modal = document.getElementById('modal')
const bfastBtn = document.getElementById('bfast')
const lunchBtn = document.getElementById('lunch')
const dinnerBtn = document.getElementById('dinner')
const dessertBtn = document.getElementById('dessert')
const searchByKeyWordBtn = document.getElementById('byName')
const searchByIngredientBtn = document.getElementById('byIngredient')
const inputKeyWord = document.getElementById('inputKW')
const inputIngredient = document.getElementById('inputIng')
const keyWordDiv = document.getElementById('inputkw')
const ingredDiv = document.getElementById('inputI')
const burnBtn = document.getElementById('burnEnergy')
const resultsContainer = document.querySelector('#results1')

searchByKeyWordBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  searchByIngredientBtn.style.display = 'none'
  searchByKeyWordBtn.style.display = 'none'
  keyWordDiv.style.display = 'flex'
  keyWordDiv.style.flexDirection = 'column'
  burnBtn.style.display = 'none'
})

 document.getElementById('kwForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const valueKW = inputKeyWord.value

    fetch(`${endPoint}?type=any&q=${valueKW}&app_id=${app_id}&app_key=${app_key}`).then(
      (data) => {
        console.log(data)
        return data.json()
      },
      (err) => {
        console.log("Error: ", err)
      }
    ).then(
      (json) => {
        console.log("JSON DATA: ", json)

        if(json.hits && json.hits.length > 0){
          //clear last results 
          resultsContainer.innerText = ''

          json.hits.forEach((hit) => {
            const recipeTitle = hit.recipe.label
            const recipeURL = hit.recipe.url
            const recipeImg = hit.recipe.image

            const resultItem = document.createElement('div')
            resultItem.classList.add('recipe-result')
            resultItem.innerHTML = `
            <img src="${recipeImg}" alt="${recipeTitle}" class="recipe-image">
            <p class="recipe-title"><a href="${recipeURL}" target="_blank">${recipeTitle}</a></p>`
            resultsContainer.appendChild(resultItem)
          })
        } else {
          console.log(document.getElementById('results1'))
          resultsContainer.style.display = 'none'
          const errorMessage = document.createElement('h1')

          errorMessage.innerText = "Key Word Not Found"
          document.querySelector('#one').append(errorMessage)
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  })


searchByIngredientBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  searchByIngredientBtn.style.display = 'none'
  searchByKeyWordBtn.style.display = 'none'
  ingredDiv.style.display = 'block'



})











  // carousel 
  const next = document.querySelector('.nxt')
  const previous = document.querySelector('.prev')
  const images = document.getElementsByClassName('images')

  let currentImgIndex = 0
  let previousImgIndex = 0

  next.addEventListener('click', () => {
      previousImgIndex = currentImgIndex
      currentImgIndex++
      console.log(currentImgIndex)
      if (currentImgIndex >= images.length) {
          currentImgIndex = 0
      }
      images[previousImgIndex].style.display = 'none'
      images[currentImgIndex].style.display = 'block'
  })

  previous.addEventListener('click', () => {
      previousImgIndex = currentImgIndex
      currentImgIndex--
      if (currentImgIndex < 0) {
          currentImgIndex = images.length - 1
      }
      images[previousImgIndex].style.display = 'none'
      images[currentImgIndex].style.display = 'block'
  })



bfastBtn.addEventListener('click', () => {
  fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=f674e30b&app_key=6560b677fd0aed4b118c0e7d7d2d3240%09&mealType=Breakfast&random=true')
  .then(res => res.json())
  .then(data => console.log(data))
  modal.style.display = 'none'
  })
lunchBtn.addEventListener('click', () => {

  modal.style.display = 'none'
  })
dinnerBtn.addEventListener('click', () => {

  modal.style.display = 'none'
  })
dessertBtn.addEventListener('click', () => {

  modal.style.display = 'none'
  })








})



