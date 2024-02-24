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
const resultsContainer2 = document.querySelector('#results2')
const backBtn = document.querySelector('.back')
const backBtn2 = document.querySelector('#back2')
const dairyFBtn = document.getElementById('dairy-free')
const glutenFBtn = document.getElementById('gluten-free')
const ketoBtn = document.getElementById('keto')
const kosherBtn = document.getElementById('kosher')
const veganBtn = document.getElementById('vegan')
const vegBtn = document.getElementById('veg')
const lowSugBtn = document.getElementById('low-sugar')
const noneBtn = document.getElementById('none')





searchByKeyWordBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  searchByIngredientBtn.style.display = 'none'
  searchByKeyWordBtn.style.display = 'none'
  keyWordDiv.style.display = 'flex'
  keyWordDiv.style.flexDirection = 'column'
  burnBtn.style.display = 'none'

  resultsContainer.innerText = ''
  // document.querySelector('#one').innerText = ''
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
          // clearing error message is not working 
          // errorMessage.innerText = ''

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
  ingredDiv.style.display = 'flex'
  ingredDiv.style.flexDirection = 'column'
  burnBtn.style.display = 'none'
  resultsContainer2.innerText = '';
  document.querySelector('#two').innerText = '';
})

document.getElementById('iForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const valueIngred = inputIngredient.value

  fetch(`${endPoint}?type=any&q=${valueIngred}&app_id=${app_id}&app_key=${app_key}`).then(
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
        resultsContainer2.innerText = ''
        // errorMessage.innerText = ''

        json.hits.forEach((hit) => {
          const recipeTitle = hit.recipe.label
          const recipeURL = hit.recipe.url
          const recipeImg = hit.recipe.image

          const resultItem = document.createElement('div')
          resultItem.classList.add('recipe-result')
          resultItem.innerHTML = `
          <img src="${recipeImg}" alt="${recipeTitle}" class="recipe-image">
          <p class="recipe-title"><a href="${recipeURL}" target="_blank">${recipeTitle}</a></p>`
          resultsContainer2.appendChild(resultItem)
        })
      } else {
        console.log(document.getElementById('results2'))
        resultsContainer2.style.display = 'none'
        const errorMessage = document.createElement('h1')

        errorMessage.innerText = "Key Word Not Found"
        document.querySelector('#two').append(errorMessage)
      }
    })
    .catch((err) => {
      console.log('Error: ', err)
    })
})

const back = () => {
  modal.style.display = 'flex'
  searchByIngredientBtn.style.display = 'flex'
  searchByKeyWordBtn.style.display = 'flex'
  burnBtn.style.display = 'block'
  keyWordDiv.style.display = 'none'
  ingredDiv.style.display = 'none'
  resultsContainer.style.display = 'block'
  resultsContainer2.style.display = 'block'

  // Clear previous results
  resultsContainer.innerHTML = ''
  resultsContainer2.innerHTML = ''

  // Remove error messages
  const errorMessagesOne = document.querySelectorAll('#one .error-message')
  errorMessagesOne.forEach((errorMessage) => errorMessage.remove())

  const errorMessagesTwo = document.querySelectorAll('#two .error-message')
  errorMessagesTwo.forEach((errorMessage) => errorMessage.remove())
}

backBtn.addEventListener('click', (back))
backBtn2.addEventListener('click', (back))





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

const q2 = () => {
  modal.innerHTML = `<div class="modal-container" id="modal">
  <div class="modal-textbox">
    <h1>Do you have any dietary restrictions?</h1>
    <div id="health"> 
      <button class="diet" id="dairy-free">Dairy Free</button>
      <button class="diet" id="gluten-free">Gluten Free</button>
      <button class="diet" id="keto">Keto</button>
      <button class="diet" id="kosher">Kosher</button>
      <button class="diet" id="vegan">Vegan</button>
      <button class="diet" id="veg">Vegetarian</button>
      <button class="diet" id="low-sugar">Low Sugar</button>
      <button class="diet" id="none">None</button>
    </div>
  </div>
</div>`
}



bfastBtn.addEventListener('click', () => {
  fetch('')
  .then(res => res.json())
  .then(data => console.log(data))
  q2()
  
  })
lunchBtn.addEventListener('click', () => {
  q2()

  })
dinnerBtn.addEventListener('click', () => {
  q2()

  })
dessertBtn.addEventListener('click', () => {
  q2()

  })

dairyFBtn.addEventListener('click', () => {

})

glutenFBtn.addEventListener('click', () => {
  
})
ketoBtn.addEventListener('click', () => {
  
})
kosherBtn.addEventListener('click', () => {
  
})
veganBtn.addEventListener('click', () => {
  
})
vegBtn.addEventListener('click', () => {
  
})
lowSugBtn.addEventListener('click', () => {
  
})
noneBtn.addEventListener('click', () => {
  
})



  // modal.style.display = 'none'





})



