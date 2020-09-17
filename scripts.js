const container = document.querySelector(".container");
container.style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column"
const button = document.createElement("button");
container.appendChild(button);

function printGrid(gridSize) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container")
  container.appendChild(gridContainer);
  gridContainer.style.cssText = "display: flex; width: 960px; justify-content: center; align-items: center"

  for (let x = 0; x <= gridSize; x++) {
    const gridX = document.createElement("div"); 
    gridX.classList.add("grid")
    gridContainer.appendChild(gridX);
    for (let y = 0; y <= gridSize; y++) {
      const gridY = document.createElement("div");
      gridY.addEventListener("mouseover", () => {
        gridY.style.backgroundColor = `rgb(${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))})`;
      })
      gridY.classList.add("grid");
      gridY.style.cssText = "background-color: white; border: 1px; border-color: black; border-style: solid; width: 1px; padding: 5px";
      gridX.appendChild(gridY)
    }
  }
}

printGrid(15)

button.classList.add("btn");
button.textContent = "Reset Grid";
button.addEventListener("click", () => {
  gridSize = parseInt(window.prompt("How many grids would you like to draw with?"));
  const gridDelete = document.querySelector(".grid-container");
  gridDelete.remove();
  printGrid(gridSize);
})
