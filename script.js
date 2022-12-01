const hugeContainer = document.querySelector(".container");

function createBox(number) {
    for (let i = 0; i < number; i++) {
        const smallerContainer = document.createElement("div");
        smallerContainer.style.cssText = "display: flex; justify-content: center; align-items: center; width: 800px; height: 50px; border: 1px solid blue;";
    
        for (let j = 0; j < number; j++) {
            const div = document.createElement("div");
            div.style.cssText = "width: 50px; height: 50px; border: 1px solid blue;";
            smallerContainer.appendChild(div);
        }
    
        hugeContainer.appendChild(smallerContainer);
    }
}

createBox(5);
