export function wheel (element){
    console.log("wow");
    const spinButton = element.querySelector("#spin");
    const wheelElement = element.querySelector("#wheel");
    const wheelImage = element.querySelector("#wheel-img");


    const spin = (wheelRandom) =>{
        
        wheelElement.textContent = `The wheel spun ${wheelRandom}`;
        wheelImage.classList.toggle("spin-stop")
        
    }
    
    spinButton.addEventListener("click", (e) =>{
        // if(wheelImage.classList .contains("spin-stop") ){wheelImage.classList.toggle("spin-stop"); wheelImage.classList.toggle("spin-in");}
        spinButton.setAttribute("disabled", true);
        const wheelRandom = Math.ceil(Math.random() * 12);
        const spinTime = 1000 + (wheelRandom * 1000/12) - 700/12
        wheelImage.classList.toggle("spin-in")
        setTimeout(() => {spin(wheelRandom), spinButton.removeAttribute("disabled")},spinTime);
        setTimeout(() => {spinButton.removeAttribute("disabled"), wheelImage.classList.toggle("spin-in"), wheelImage.classList.toggle("spin-stop")}, spinTime + 1000)
    });
    
}/*
for(let i = 0; i <360; i++){
    setTimeout(() => {
        element.style = `transform: rotate(${i}deg)`;
    }, i * 1);

};*/