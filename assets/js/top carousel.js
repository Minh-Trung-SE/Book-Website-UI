$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

let indexSlideActive = 0
let slides = $$('.top-carousel-item')
let dots = $$('.top-carousel-dot')


const handleNextSlide = function(nextIndexSlide) {
    $('.top-carousel-item--active').classList.remove('top-carousel-item--active')
    $('.top-carousel-dot--active').classList.remove('top-carousel-dot--active')
    console.log(nextIndexSlide)
    if (nextIndexSlide == undefined) {
        indexSlideActive++
        console.log(nextIndexSlide)

    }
    if (indexSlideActive === slides.length || indexSlideActive < 0) {
        indexSlideActive = 0
    }
    slides[indexSlideActive].classList.add('top-carousel-item--active')
    dots[indexSlideActive].classList.add('top-carousel-dot--active')
}

let intervalNextSlide = setInterval(handleNextSlide, 3000)


dots.forEach(function(dot, index) {
    dot.onclick = function() {
        clearInterval(intervalNextSlide)
            // Clear and stop funtion intervalNextSlide
            //Get index slide to next
        indexSlideActive = index
        handleNextSlide(indexSlideActive)
            // Recall intervalNextSlide
        intervalNextSlide = setInterval(handleNextSlide, 3000)
    }
});