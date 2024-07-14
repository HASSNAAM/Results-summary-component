# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Overview Desktop](./design/desktop-design.jpg)
![Overview Mobile](./design/mobile-design.jpg)

### Links

- [Solution URL:](https://github.com/HASSNAAM/Results-summary-component.git)
- [Live Site URL:](https://hassnaam.github.io/Results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

While working on this project, I learned how to fetch local JSON data and dynamically populate the content in the HTML. This was a key aspect of making the page interactive and updating the data efficiently.

Example of fetching and displaying JSON data:

```js
document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const resultsContainer = document.getElementById("results");
      data.forEach((item) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add(item.category.toLowerCase());

        resultDiv.innerHTML = `
            <div>
              <img src="${item.icon}" alt="${item.category}" />
              <h3>${item.category}</h3>
            </div>
            <p><span>${item.score}</span> / 100</p>
          `;

        resultsContainer.appendChild(resultDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
```

### Continued development

In future projects, I want to continue focusing on:

- Enhancing accessibility features
- Implementing more advanced CSS techniques
- Exploring more complex JavaScript functionalities

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive resource for web development knowledge.
- [Frontend Mentor](https://www.frontendmentor.io) - Great platform for practicing frontend skills with real-world projects.

## Author

- Github - [Hassnaa Mahmoud](https://github.com/HASSNAAM)
- Frontend Mentor - [@HASSNAAM](https://www.frontendmentor.io/profile/HASSNAAM)

## Acknowledgments

Thanks to Frontend Mentor for providing these challenges which are instrumental in improving my coding skills.
