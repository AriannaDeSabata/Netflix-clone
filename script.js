let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const count = 7
    let next = el.nextElementSibling
    for (let i = 1; i < count; i ++) {
        if (!next) {
        	next = items[0]
      	}

        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[1])
        next = next.nextElementSibling
    }
})

let contCarousel = document.querySelectorAll("section.menuFilm ~ section")
contCarousel.forEach((el, i)=>{
    el.classList.add("scroll")
    el.style.animationDelay =`${i * 0.5}s`
})


/*
window.addEventListener("scroll", show);

function show() {
    const scrollPosition = window.scrollY;
    contCarousel.forEach((el)=>{
        if (scrollPosition >= el.getBoundingClientRect().top) {
            el.classList.add("scroll");
        }
    })
 
}*/