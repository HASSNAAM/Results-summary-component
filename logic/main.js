document.addEventListener("DOMContentLoaded", () => {
  fetch("../data.json")
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
