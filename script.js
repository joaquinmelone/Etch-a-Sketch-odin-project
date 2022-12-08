// Variables.

let numberOfPixels;
let attempts = 0;

let random1, random2, random3;

// Button to choose the amount of pixels.

const buttonContainer = document.querySelector(".button-box");

const buttonPrompt = document.createElement("button");
buttonPrompt.textContent = "Number of pixels";
buttonPrompt.classList.add("prompt-button");
buttonPrompt.style.cssText = "width: 150px; height: 35px;";

buttonPrompt.addEventListener('click', () => {

    numberOfPixels = prompt("Elige el número de pixeles que deseas ver en el cuadrado.");

    while ((numberOfPixels > 64) || (numberOfPixels <= 0)) {
        numberOfPixels = prompt("El número debe ser entre 0 y 64.");
    }

    createBox(numberOfPixels);
    attempts += 1;
  });

buttonContainer.appendChild(buttonPrompt);

const buttonRainbow = document.createElement("button");
buttonRainbow.textContent = "Rainbow mode!";
buttonRainbow.classList.add("rainbow-button");
buttonRainbow.style.cssText = "width: 150px; height: 35px;";


// Creates random numbers for rgb values

function rainbow() {
    random1 = Math.floor(Math.random() * 255);
    random2 = Math.floor(Math.random() * 255);
    random3 = Math.floor(Math.random() * 255);
}

buttonRainbow.addEventListener("click", () => {
    const divs = document.querySelectorAll("#pixel");
    
    // We treat the divs variable like an array so the effect affects every single pixel and not just the first one

    for (const div of divs) {
        div.addEventListener("mouseover", function(e) {
            rainbow();
            this.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
        });
    }
    
})

buttonContainer.appendChild(buttonRainbow);


// We just create a new box with the number of pixels that the user chose before

const buttonEraser = document.createElement("button");
buttonEraser.textContent = "Eraser";
buttonEraser.classList.add("eraser-button");
buttonEraser.style.cssText = "width: 150px; height: 35px;";

buttonEraser.addEventListener("click", () => {
    createBox(numberOfPixels);
})

buttonContainer.appendChild(buttonEraser);

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



