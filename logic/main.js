document.addEventListener("DOMContentLoaded", () => {
    const data = [
      {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
      }
    ];
  
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
  });
  