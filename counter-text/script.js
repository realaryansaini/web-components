
const counter_text = document.getElementsByClassName("counter_text")
Array.from(counter_text).forEach(counter => {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    let array = counter.innerText.split('');
    array = array.filter(item => item !== "\n")
    counter.innerText = ""

    array.forEach((element, index) => {
        counter.insertAdjacentHTML("beforeend", `<span>${element}</span>`)
        if (/[a-zA-Z]/.test(element)) {
            const ispresent = alphabet.indexOf(element.toUpperCase())
            counter.children[index].textContent = ""
            for (let i = 0; i <= ispresent; i++) {
                counter.children[index].insertAdjacentHTML("beforeend", `<li>${alphabet[i]}</li>`)
                counter.children[index].setAttribute("style", `--i:${i}`)
            }
        } else if (/\d/.test(element)) {
            let num = Number(element)
            counter.children[index].textContent = ""
            for (let i = 0; i <= num; i++) {
                counter.children[index].insertAdjacentHTML("beforeend", `<li>${i}</li>`)
                counter.children[index].setAttribute("style", `--i:${i}`)
            }
        }
    });
})






