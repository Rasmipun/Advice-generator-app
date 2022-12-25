const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceButton = document.getElementById("generate-btn");

async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const {slip:{id,advice}} = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = advice;
}

getAdvice()
adviceButton.addEventListener("click",getAdvice)gi