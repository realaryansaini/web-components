let text =  document.querySelector(".text")

let spans = text.innerText.split("")
text.innerHTML = ""
spans.map((value, index)=>{
   text.insertAdjacentHTML("beforeend",`<span style="transform:rotate(${index * 10}deg)">${value}</span>`)
})
