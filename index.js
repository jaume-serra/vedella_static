window.onload = () => {
    var scrollpos = window.scrollY;
    const navBar = document.getElementById("nav")
    const changeColor = document.getElementsByClassName("chage-color")
    const image = document.getElementById("image")

    document.addEventListener("scroll", () => {
        var scrollpos = window.scrollY;
        if (scrollpos > 40) {
            navBar.classList.add("bg-[#333]")
            navBar.classList.add("shadow-2xl")

            image.classList.add("h-20")
            image.classList.add("w-16")
            image.classList.remove("h-32")
            image.classList.remove("w-28")
           

        } else {
            navBar.classList.remove("bg-[#333]")
            navBar.classList.remove("shadow-2xl")
              
            image.classList.remove("h-20")
            image.classList.remove("w-16")
            image.classList.add("h-32")
            image.classList.add("w-28")
        
        }
    })
}
