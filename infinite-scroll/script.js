
const scrollor_containers = document.querySelectorAll(".scrollor-container")

scrollor_containers.forEach((scroller_container)=>{
    const scrollor = scroller_container.querySelector(".scrollor")
    const spans =  Array.from(scrollor.children)
    // console.log(spans);
    spans.forEach((item) =>{
        const duplicateItem = item.cloneNode(true)
        // console.log(duplicateItem);
        duplicateItem.setAttribute("aria-hidden",true)
        scrollor.appendChild(duplicateItem)
    })

})