document.addEventListener('DOMContentLoaded', () => {
  
  // constants and variables 

  const app_id = 'f674e30b'
  const app_key = '6560b677fd0aed4b118c0e7d7d2d3240'
  const endPoint = 'https://api.edamam.com/api/recipes/v2'


  const questionOne = document.getElementById('modal-1')
  const questionTwo = document.getElementById('modal-2')

  const modal = document.getElementById('modal')
  const bfastBtn = document.getElementById('bfast')
  const lunchBtn = document.getElementById('lunch')
  const dinnerBtn = document.getElementById('dinner')

  const dairyFBtn = document.getElementById('dairy-free')
  const glutenFBtn = document.getElementById('gluten-free')
  const ketoBtn = document.getElementById('keto')
  const kosherBtn = document.getElementById('kosher')
  const veganBtn = document.getElementById('vegan')
  const vegBtn = document.getElementById('veg')
  const lowSugBtn = document.getElementById('low-sugar')
  const noneBtn = document.getElementById('none')

  const searchByBtns = document.getElementById('idliketoBTNS')
  const dessertBtn = document.getElementById('desserts')
  const dessertDiv = document.getElementById('dessertResults')
  const searchByKeyWordBtn = document.getElementById('byName')
  const searchByIngredientBtn = document.getElementById('byIngredient')
  const inputKeyWord = document.getElementById('inputKW')
  const inputIngredient = document.getElementById('inputIng')
  const keyWordDiv = document.getElementById('inputkw')
  const ingredDiv = document.getElementById('inputI')
  const keyWordForm = document.getElementById('kwForm')
  const ingredientForm = document.getElementById('iForm')
  
  const resultsContainer = document.querySelector('#results1')
  const resultsContainer2 = document.querySelector('#results2')
  const resultsContainer3 = document.querySelector('#results3')

  const backBtn1 = document.querySelector('.back')
  const backBtn2 = document.querySelector('#back2')
  const backBtn3 = document.querySelector('#back3')
  const backBtn4 = document.querySelector('#back4')
  const backBtn5 = document.querySelector('#back5')

  const resultsModalInput = document.getElementById('resultsFromModalInput')
  
  // const burnBtn = document.getElementById('burnEnergy')

  const carouselContainer = document.querySelector('.carousel-container')
  const next = document.querySelector('.nxt')
  const previous = document.querySelector('.prev')
  const images = document.getElementsByClassName('images')

  let currentImgIndex = 0
  let previousImgIndex = 0

  let diet = ''
  let mealType = ''

  const handleKeyWordSearch = () => {
    modal.style.display = 'none'
    searchByIngredientBtn.style.display = 'none'
    searchByKeyWordBtn.style.display = 'none'
    dessertBtn.style.display = 'none'
    keyWordDiv.style.display = 'flex'
    keyWordDiv.style.flexDirection = 'column'
    backBtn1.style.display = 'flex'
    carouselContainer.style.display = 'none'
    next.style.display = 'none'
    previous.style.display = 'none'
    resultsContainer.innerText = ''
    document.querySelector('#one').innerText = ''

    // burnBtn.style.display = 'none'
  }
  const handleIngredientSearch = () => {
    modal.style.display = 'none'
    searchByIngredientBtn.style.display = 'none'
    searchByKeyWordBtn.style.display = 'none'
    dessertBtn.style.display = 'none'
    ingredDiv.style.display = 'flex'
    ingredDiv.style.flexDirection = 'column'
    resultsContainer2.innerText = ''
    document.querySelector('#two').innerText = ''
    backBtn2.style.display = 'flex'
    carouselContainer.style.display = 'none'
    next.style.display = 'none'
    previous.style.display = 'none'

    // burnBtn.style.display = 'none'
  }

  searchByKeyWordBtn.addEventListener('click', handleKeyWordSearch)
  searchByIngredientBtn.addEventListener('click', handleIngredientSearch)

  keyWordForm.addEventListener('submit', (e) => {
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
            resultsContainer.append(resultItem)
          })
        } else {
          console.log(resultsContainer)
          resultsContainer.style.display = 'none'
          const errorMessage = document.createElement('h1')
          errorMessage.innerText = "Recipe Not Found"
          document.querySelector('#one').append(errorMessage)
        }
      })
      .catch((err) => {
        // If an error occurs in the promise, this code will run. 
        console.log('Error: ', err)
      })
    })

  ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const valueIngred = inputIngredient.value
    backBtn2.style.display = 'flex'

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

          errorMessage.innerText = "Recipe Not Found"
          document.querySelector('#two').append(errorMessage)
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  })


  dessertBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    searchByIngredientBtn.style.display = 'none'
    searchByKeyWordBtn.style.display = 'none'
    dessertBtn.style.display = 'none'
    dessertDiv.style.display = 'flex'
    dessertDiv.style.flexDirection = 'column'
    backBtn5.style.display = 'flex'
    resultsContainer3.innerText = ''
    document.querySelector('#three').innerText = ''
    carouselContainer.style.display = 'none'
    next.style.display = 'none'
    previous.style.display = 'none'
    // burnBtn.style.display = 'none'

    fetch(`${endPoint}?type=any&app_id=${app_id}&app_key=${app_key}&dishType=Desserts&random=true`).then(
      (data) => {
        console.log(data)
        return data.json()
      },
      // (err) => {
      //   console.log("Error: ", err)
      // }
    ).then(
      (json) => {
        console.log("JSON DATA: ", json)

        if(json.hits && json.hits.length > 0){
          //clear last results 
          resultsContainer3.innerText = ''
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
            resultsContainer3.appendChild(resultItem)
          })
        } else {
          console.log(resultsContainer3)
          resultsContainer3.style.display = 'none'
          const errorMessage = document.createElement('h1')

          errorMessage.innerText = "Key Word Not Found"
          document.querySelector('#three').append(errorMessage)
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  })
  const back = () => {
    window.location.reload()
    // modal.style.display = 'flex'
    // searchByBtns.style.display = 'flex'
    // searchByIngredientBtn.style.display = 'flex'
    // searchByKeyWordBtn.style.display = 'flex'
    // dessertBtn.style.display = 'flex'
    // dessertBtn.style.alignItems = 'center'
    // searchByKeyWordBtn.style.alignItems = 'center'
    // searchByIngredientBtn.style.alignItems = 'center'
    // keyWordDiv.style.display = 'none'
    // ingredDiv.style.display = 'none'
    // dessertDiv.style.display = 'none'
    // resultsContainer.style.display = 'block'
    // resultsContainer2.style.display = 'block'
    // resultsContainer3.style.display = 'block'
    // questionOne.style.display = 'flex'
    // questionTwo.style.display = 'none'
    // backBtn3.style.display = 'none'
    // backBtn5.style.display = 'none'
    // carouselContainer.style.display = 'grid'
    // next.style.display = 'flex'
    // previous.style.display = 'flex'

    
    // // burnBtn.style.display = 'grid'
    // // burnBtn.style.alignContent = 'center'

    // // Clear previous results
    // resultsContainer.innerHTML = ''
    // resultsContainer2.innerHTML = ''
    // resultsModalInput.innerHTML = ''
    // resultsContainer3.innerHTML = ''
  
    // // Remove error messages 
    // const errorMessagesOne = document.querySelectorAll('#one .error-message')
    // errorMessagesOne.forEach((errorMessage) => errorMessage.remove())
  
    // const errorMessagesTwo = document.querySelectorAll('#two .error-message')
    // errorMessagesTwo.forEach((errorMessage) => errorMessage.remove())
  }
  
  document.querySelectorAll('.back').forEach((backBtn) => {
    backBtn.addEventListener('click', back)
  })
  // backBtn.addEventListener('click', back)
  // backBtn2.addEventListener('click', back)
  // backBtn3.addEventListener('click', back)
  // backBtn4.addEventListener('click', back)
  // backBtn5.addEventListener('click', back)
  
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



//modal 

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
  const fetchFunction = () => {
    backBtn4.style.display = 'grid'
    backBtn3.style.display = 'grid'
    fetch(`${endPoint}?type=public&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}&health=${diet}&random=true`)
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
            backBtn3.style.display = 'block'
            resultsModalInput.style.display = 'flex'
            // resultsModalInput.style.alignItems = 'center'
            carouselContainer.style.display = 'none'
            next.style.display = 'none'
            previous.style.display = 'none'
            // burnBtn.style.display = 'none'

            const resultItem = document.createElement('div')
            resultItem.classList.add('recipe-result')
            resultItem.innerHTML = `
            <img src="${recipeImg}" alt="${recipeTitle}" class="recipe-image">
            <p class="recipe-title"><a href="${recipeURL}" target="_blank"> 
            ${recipeTitle}</a></p>`
            resultsModalInput.appendChild(resultItem)
          })
        } else {
          console.log(resultsModalInput)
          resultsModalInput.style.display = 'none'
          const errorMessage = document.createElement('h1')
          errorMessage.innerText = "No Recipes Found"
          resultsModalInput.append(errorMessage)
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
        resultsModalInput.style.display = 'none'
        const errorMessage = document.createElement('h1')
        errorMessage.innerText = "An error occurred while fetching recipes"
        resultsModalInput.append(errorMessage)
      })
  }

  const handleDietButtonClick = (dietType) => {
    diet = dietType
    fetchFunction()
  }

  dairyFBtn.addEventListener('click', () => handleDietButtonClick('dairy-free'))
  glutenFBtn.addEventListener('click', () => handleDietButtonClick('gluten-free'))
  ketoBtn.addEventListener('click', () => handleDietButtonClick('keto-friendly'))
  kosherBtn.addEventListener('click', () => handleDietButtonClick('kosher'))
  veganBtn.addEventListener('click', () => handleDietButtonClick('vegan'))
  vegBtn.addEventListener('click', () => handleDietButtonClick('vegetarian'))
  lowSugBtn.addEventListener('click', () => handleDietButtonClick('low-sugar'))
  noneBtn.addEventListener('click', () => {
    backBtn3.style.display = 'flex'
    diet = ''
    fetch(`${endPoint}?type=any&app_id=${app_id}&app_key=${app_key}&mealType=${mealType}&random=true`)
    .then((data) => {
      console.log(data)
      return data.json()
    },
    // (err) => {
    //   console.log("Error: ", err)
    // }
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
            backBtn3.style.display = 'flex'
            carouselContainer.style.display = 'none'
            next.style.display = 'none'
            previous.style.display = 'none'
            // burnBtn.style.display = 'none'

            const resultItem = document.createElement('div')
            resultItem.classList.add('recipe-result')
            resultItem.innerHTML = `
            <img src="${recipeImg}" alt="${recipeTitle}" class="recipe-image">
            <p class="recipe-title"><a href="${recipeURL}" target="_blank">Click here to get this recipe: 
            ${recipeTitle}</a></p>`
            resultsModalInput.appendChild(resultItem)
            resultsModalInput.style.display = 'flex'
          })
        } else {
          console.log(resultsModalInput)
          resultsModalInput.style.display = 'none'
          const errorMessage = document.createElement('h1')
          errorMessage.innerText = "Key Word Not Found"
          document.querySelector('#results').append(errorMessage)
        }
      }
    ).catch((err) => {
        console.log('Error: ', err)
      })
  })
})



