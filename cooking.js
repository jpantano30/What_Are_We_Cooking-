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
  const ingredientForm = document.getElementById('iForm')
  const burnBtn = document.getElementById('burnEnergy')
  const resultsContainer = document.querySelector('#results1')
  const resultsContainer2 = document.querySelector('#results2')
  const backBtn = document.querySelector('.back')
  const backBtn2 = document.querySelector('#back2')
  const searchByBtns = document.getElementById('idliketoBTNS')
  const backBtn3 = document.querySelector('#back3')
  const backBtn4 = document.querySelector('#back4')


  const questionOne = document.getElementById('modal-1')
  const questionTwo = document.getElementById('modal-2')


  let mealType = ''
  let dessertBtnPressed = false

  //carousel 
  const next = document.querySelector('.nxt')
  const previous = document.querySelector('.prev')
  const images = document.getElementsByClassName('images')

  let currentImgIndex = 0
  let previousImgIndex = 0



  let diet = ''

  
  const dairyFBtn = document.getElementById('dairy-free')
  const glutenFBtn = document.getElementById('gluten-free')
  const ketoBtn = document.getElementById('keto')
  const kosherBtn = document.getElementById('kosher')
  const veganBtn = document.getElementById('vegan')
  const vegBtn = document.getElementById('veg')
  const lowSugBtn = document.getElementById('low-sugar')
  const noneBtn = document.getElementById('none')

  

  const resultsModalInput = document.getElementById('resultsFromModalInput')

  const fetchForHealth = `${endPoint}?type=public&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}&health=${diet}&random=true`
  const dessertFetchForH = `${endPoint}?type=public&app_id=${app_id}&app_key=${app_key}&dishType=Desserts&health=${diet}&random=true`


  const fetchFunctionHealth = (fetchFor) => {
    fetch(fetchFor)
    .then((data) => {
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
          json.hits.forEach((hit) => {
            const recipeTitle = hit.recipe.label
            const recipeURL = hit.recipe.url
            const recipeImg = hit.recipe.image 
            console.log(recipeTitle, recipeURL, recipeImg)
            modal.style.display = 'none'
            searchByBtns.style.display = 'none'
            burnBtn.style.display = 'none'
            backBtn3.style.display = 'flex'
            const resultItem = document.createElement('div')
            resultItem.classList.add('recipe-result')
            resultItem.innerHTML = `
            <img src="${recipeImg}" alt="${recipeTitle}" class="recipe-image">
            <p class="recipe-title"><a href="${recipeURL}" target="_blank">Click here to get this recipe: 
            ${recipeTitle}</a></p>`
            resultsModalInput.appendChild(resultItem)
            resultsModalInput.style.display = 'block'
          })
        } else {
          console.log(resultsModalInput)
          resultsModalInput.style.display = 'none'
          const errorMessage = document.createElement('h1')

          errorMessage.innerText = "Key Word Not Found"
          document.querySelector('#two').append(errorMessage)
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }




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
  const KeyWordForm = document.getElementById('kwForm')
  KeyWordForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const valueKW = inputKeyWord.value

      fetch(`${endPoint}?type=any&q=${valueKW}&app_id=${app_id}&app_key=${app_key}&random=true`).then(
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
            console.log(resultsContainer)
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
    ingredDiv.style.gridArea = 'modal'
    burnBtn.style.display = 'none'
    resultsContainer2.innerText = '';
    document.querySelector('#two').innerText = '';
  })

  ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const valueIngred = inputIngredient.value

    fetch(`${endPoint}?type=any&q=${valueIngred}&app_id=${app_id}&app_key=${app_key}&random=true`).then(
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
            //cant get results to show up in the modal grid area 
            // ingredientForm.style.gridArea = 'modal'
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
    searchByBtns.style.display = 'flex'
    searchByIngredientBtn.style.display = 'flex'
    searchByKeyWordBtn.style.display = 'flex'
    burnBtn.style.display = 'block'
    keyWordDiv.style.display = 'none'
    ingredDiv.style.display = 'none'
    // resultsModalInput.style.display = 'none'
    resultsContainer.style.display = 'block'
    resultsContainer2.style.display = 'block'
    questionOne.style.display = 'flex'
    questionTwo.style.display = 'none'
    backBtn3.style.display = 'none'
  
    // Clear previous results
    resultsContainer.innerHTML = ''
    resultsContainer2.innerHTML = ''
    resultsModalInput.innerText = ''

    // Remove error messages
    const errorMessagesOne = document.querySelectorAll('#one .error-message')
    errorMessagesOne.forEach((errorMessage) => errorMessage.remove())

    const errorMessagesTwo = document.querySelectorAll('#two .error-message')
    errorMessagesTwo.forEach((errorMessage) => errorMessage.remove())
  }

  backBtn.addEventListener('click', (back))
  backBtn2.addEventListener('click', (back))
  backBtn3.addEventListener('click', (back))
  backBtn4.addEventListener('click', (back))






  // carousel 


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
      questionOne.style.display = 'none'
      questionTwo.style.display = 'flex'
  }


  
  bfastBtn.addEventListener('click', () => {
    mealType = 'Breakfast'
    q2()
    
    })
  lunchBtn.addEventListener('click', () => {
    mealType = 'Lunch'
    q2()

    })
  dinnerBtn.addEventListener('click', () => {

    mealType = 'dinner'
    q2()
  })
  dessertBtn.addEventListener('click', () => {
    dessertBtnPressed = true
    dishType = 'dessert'
    q2()
  })



    dairyFBtn.addEventListener('click', () => {
    console.log('Dairy Free Button Clicked')
    // backBtn3.style.display = 'flex'
    // console.log(backBtn3.style.display)

    diet = 'dairy-free'
    if(dessertBtnPressed){
      fetchFunctionHealth(dessertFetchForH)
    } else { 
    fetchFunctionHealth(fetchForHealth)
    }
  })
 



  glutenFBtn.addEventListener('click', () => {
    diet = 'gluten-free'
    if(dessertBtnPressed){
        fetchFunctionHealth(dessertFetchForH)
      } else { 
        fetchFunctionHealth(fetchForHealth)
      }
  })
  ketoBtn.addEventListener('click', () => {
    diet = 'keto-friendly'
    if(dessertBtnPressed){
      fetchFunctionHealth(dessertFetchForH)
    } else { 
    fetchFunctionHealth(fetchForHealth)
    }
  })
  kosherBtn.addEventListener('click', () => {
    diet = 'kosher'
    if(dessertBtnPressed){
      fetchFunctionHealth(dessertFetchForH)
    } else { 
    fetchFunctionHealth(fetchForHealth)
    }
  })
  veganBtn.addEventListener('click', () => {
    diet = 'vegan'
    if(dessertBtnPressed){
      fetchFunctionHealth(dessertFetchForH)
    } else { 
    fetchFunctionHealth(fetchForHealth)
    }
  })
  vegBtn.addEventListener('click', () => {
    diet = 'vegetarian'
    if(dessertBtnPressed){
      fetchFunctionHealth(dessertFetchForH)
    } else { 
    fetchFunctionHealth(fetchForHealth)
    }
  })
  lowSugBtn.addEventListener('click', () => {
    diet = 'low-sugar'
    if(dessertBtnPressed){
      fetchFunctionHealth(dessertFetchForH)
    } else { 
    fetchFunctionHealth(fetchForHealth)
    }
  })

  noneBtn.addEventListener('click', () => {
    if(dessertBtnPressed){
      fetchFunctionHealth('https://api.edamam.com/api/recipes/v2?type=public&app_id=f674e30b&app_key=6560b677fd0aed4b118c0e7d7d2d3240&dishType=Desserts&random=true')
    } else {
      fetchFunctionHealth(`${endPoint}?type=any&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}&random=true`)
    }
  })
})
