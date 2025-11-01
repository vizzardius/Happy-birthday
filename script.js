const flame = document.querySelector(".flame")
const candle = document.querySelector(".candle")

flame.style.display = "none"
candle.style.display = "none"

setTimeout(()=>{
   candle.style.display = "block"
},3000)

setTimeout(()=>{
   flame.style.display = "block"
},4000)