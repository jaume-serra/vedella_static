window.onload = () => {
    var scrollpos = window.scrollY;
    const navBar = document.getElementById("nav")
    const changeColor = document.getElementsByClassName("chage-color")
    const image = document.getElementById("image")

    document.addEventListener("scroll", () => {
        var scrollpos = window.scrollY;
        if (scrollpos > 40) {
            navBar.classList.add("md:bg-[#333]")

            image.classList.add("md:h-20")
            image.classList.add("md:w-16")
            image.classList.remove("md:h-32")
            image.classList.remove("md:w-28")


        } else {
            navBar.classList.remove("md:bg-[#333]")

            image.classList.remove("md:h-20")
            image.classList.remove("md:w-16")
            image.classList.add("md:h-32")
            image.classList.add("md:w-28")

        }
    })
}


// Initialize and add the map
function initMap() {
    const calders = { lat: 41.795073, lng: 2.005011 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: calders,
    });
    const marker = new google.maps.Marker({
        position: calders,
        map: map,
    });
}

window.initMap = initMap;