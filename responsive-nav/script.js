const toggle_nav = ()=>{
    const navlinks = document.getElementsByClassName("navlinks")[0]
    let isTrue = navlinks.getAttribute("data-visiblity")
    let img = document.querySelector(".nav img")

  
    if(isTrue == "true"){
        navlinks.setAttribute("data-visiblity",false)
        img.setAttribute("src","./public/hamburger.png")
    }else{
        navlinks.setAttribute("data-visiblity",true)
        // console.log(img)
        img.setAttribute("src","./public/close.png")
    }
}