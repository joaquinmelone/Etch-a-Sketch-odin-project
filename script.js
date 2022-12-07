// Variables.

let numberOfPixels;
let attempts = 0;

// Button to choose the amount of pixels.

const buttonContainer = document.querySelector(".button-box");

const buttonPrompt = document.createElement("button");
buttonPrompt.textContent = "Number of pixels";
buttonPrompt.classList.add("prompt-button");
buttonPrompt.style.cssText = "width: 150px; height: 35px;";

buttonPrompt.addEventListener('click', () => {
    numberOfPixels = prompt("Elige el número de pixeles que deseas ver en el cuadrado.");
    createBox(numberOfPixels);
    attempts += 1;
  });

buttonContainer.appendChild(buttonPrompt);

// Container for the pixels.

const hugeContainer = document.querySelector(".container");

// This function creates the amount of pixels on the screen. And also removes the pixels that took place before.

function createBox(number) {

    // When the user already used the button to change the number of pixels, we remove the pixels that were before in order to create the new grid.
     
    if (attempts > 0) {
        while (hugeContainer.hasChildNodes()) {
            hugeContainer.removeChild(hugeContainer.firstChild);
        }
    }
    
    // This 2 for loops are used to create the columns and rows necessary to represent an Number x Number grid.

    for (let i = 0; i < number; i++) {

        const smallerContainer = document.createElement("div");
        smallerContainer.setAttribute("id", "smallerContainer");
        smallerContainer.style.cssText = "display: flex;";
    
            for (let j = 0; j < number; j++) {

                const div = document.createElement("div");
                div.setAttribute("id", "pixel");
                
                smallerContainer.appendChild(div);

                div.addEventListener('mouseover', function(e) {
                    this.style.backgroundColor = 'black';
                });

            }

        hugeContainer.appendChild(smallerContainer);
    }

    
}



