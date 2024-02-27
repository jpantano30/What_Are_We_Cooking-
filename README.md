# What_Are_We_Cooking-
#### Technologies used: 👩‍💻
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
<!-- ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) -->
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Unsplash](https://img.shields.io/badge/Unsplash-000000.svg?style=for-the-badge&logo=Unsplash&logoColor=white)

#

<div align="center">
<a href="https://what-are-we-cooking.netlify.app/"><img src="/Other Files/ModalPrev.png" height="400"></a>
</div>

<div align="center">
Click the image above to be directed to What Are We Cooking!. :point_up_2:
</div>

#


# Description: 
"What Are We Cooking?" Is a webpage that uses JavaScript fetch to get recipes from the Edamam Recipe Search API. 
 
This site allows users to search for recipes by key words or ingredients and includes two multiple choice answer questions for finding recipes by meal type and if any dietary rectrictions are present. An additional button is included that generates random dessert recipes. 
#

### Deployed Link 🔗
<a href="https://what-are-we-cooking.netlify.app"> What Are We Cooking?</a> 

#

<details>
<summary>Page View </summary>
<img src="/Other Files/pagePrev.png" alt="Website preview image">
</details>

#
  
<details> 
<summary>Instructions:</summary>
👉 In order to navigate to the webpage, click on the page image above. 
 <br>
👉 To search for recipes by <span text-decoration = 'bold'> key words or by ingredient </span>, the user must click on the Search By Keyword or Ingredient button. An input field will apear where the keyword or ingredient are inserted with a submit button below it. After hitting submit, the recipes will populate the page and the user can scroll through to search for one they like. In order to view the whole recipe, users must select the link that will take them to the recipes webpage. 
 <br>
👉 To get a random list of <span text-decoration = 'bold'>dessert recipies </span>, the user can press the "What's for Dessert?" button. It will populate the page with a selection of dessert recipe links and images, similar to the previous search by buttons. 
 <br>
👉 The middle modal includes a mulitple choice question to search for different meal types: breakfast, lunch or dinner. After one is selected, another modal asks if the user have any dietary restrictions such as: dairy-free, gluten-free, vegan, etc.... After selection, the page will populate with random recipes according to the users selections. 
<br>
👉 To go back (reset the page), the user can select any of the back buttons present on the page after clicking a button. 
<br>
👉 The bottom of the page includes a carousel of images from different recipes included in the the Edamam Recipe API. The user can view the next or the previous image by using the forward and back arrow buttons on each side of the carousel. 
<br>
👉 Lastly, there is a button in the bottom left hand corner "How to Burn that Energy" which, takes the user to another page that will allow them to view  random workouts to burn the energy off. 
</details>

#

<details>
 <summary> 🎨 Wire Frames </summary>
   <details> 
    <summary> ✏️ What Are We Cooking? page</summary>
        <img src="/Other Files/WhatAreWeCookingWireframe.png">
   </details>
   <details>
      <summary> ✏️ Future Feature: How to Burn that Energy? Page</summary>
          <img src="/Other Files/burnEnergyWireframe.png">
   </details>
</details>

#

<details> 
 <summary> Challenges: </summary>
 Descriptions of any unsolved problems or major hurdles that were overcome. 
 <ul>
  <li> The formatting of the page has been a bit of a struggle for me. I would like to have the results from all buttons to display in the middle of the page. The results from the modal look different than the results from the buttons on the side and I would like to change them so they are displayed similarly.</li>
  <li>I struggled with styling the results page but I was able to figure it out in the end. </li>
  <li> Responsive design: especially on larger screens, needs more work. I struggled with this. I started with mobile first design. I would like the information to all stay in the middle of the page when the page gets larger. </li>
  <li> One challenge I overcame invovled fetching from the API and making it work with the DOM. Everytime I got one button working, it would break my code somewhere else. </li>
  <li> Another challenge I overcame was fixing the back buttons so that the page was completely reset. The styling of the page was a little wonky at first and the button would not apear again after it had been clicked once.</li>
  <li> The formatting of the carousel was a challenge for me. I had trouble with the placement of the previous and next buttons. </li>
  <li>The page's CSS looks completely different on Safari compared to Chrome so currently this app is only styled for Chrome. </li>
 </ul>
</details>

#

<details> 
 <summary> ❓ Future Features </summary>
  Next steps planned: 
 <ul>
  <li> Fixes to above unsolved problems. </li>
  <li> Make the "How are we going to burn that energy?" button direct the user to a new page where it will generate a random workout. I was thinking of just coding this in another file/ or same file and using a function to randomize the workouts and choose one based on the input from the user.</li>
  <li> Fix the syling of the page and make it look nicer. </li>
  <li> Add captions on hover to the carousel. </li>
  <li> Add CSS transitions and animations. </li>
  <li> Add complex user interface module: tooltips</li>
 </ul>
</details>

#
<details> 
<summary>Approach Taken:</summary>
👉 I started by adding in HTML and some CSS. Then created the carousel. 
<br>
👉 I then went back and forth through HTML, CSS, and JavaScript creating buttons and functionality. 
<br>
👉 Lastly, I finished off by adjusting CSS styling for responsive design and fixed errors. 
</details>

#



