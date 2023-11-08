const toggleNav = () => {
    const navbar = document.querySelector('.navbar');
    const search = document.querySelector('.search');

    if (!(navbar.classList.contains('toggle-nav') && search.classList.contains('toggle-search'))) {
        navbar.classList.add('toggle-nav')
        search.classList.add('toggle-search')
    } else {
        navbar.classList.remove('toggle-nav')
        search.classList.remove('toggle-search')
    }
}

const activeTab = (event) => {
    let listItem = document.querySelectorAll('.list-item')
    console.log(listItem)
    listItem.forEach((item) => {
        item.classList.remove('active-tab')
        event.classList.add('active-tab')
    })
}

const slides = document.querySelectorAll('.slide')

slides.forEach((slide, index) => {
    slide.style.left = `${100 * index}%`
})

let counter = 0

const shiftSlide = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

const prevSlide = () => {
    if (counter > 0 && counter <= 2) {
        counter--
        shiftSlide()
    }
    else {
        counter = 2
        shiftSlide()
    }
}

const nextSlide = () => {
    if (counter >= 0 && counter < 2) {
        counter++
        shiftSlide()
    }
    else {
        counter = 0
        shiftSlide()
    }
}