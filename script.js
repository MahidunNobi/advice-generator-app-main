const adviceId = document.querySelector("#AdviceId")
const adviceTxt = document.querySelector("#AdviceTxt")
const btn = document.querySelector("#btn")

const getAdvice = async ()=>{
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceId.textContent = `#${data.slip.id}`
    adviceTxt.textContent = `"${data.slip.advice}"`
}
getAdvice()