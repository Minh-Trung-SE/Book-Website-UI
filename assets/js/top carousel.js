$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

let indexSlideActive = 0
let slides = $$('.top-carousel-item')
let dots = $$('.top-carousel-dot')

const handleNextSlide = function(currentIndex) {
    $('.top-carousel-item--active').classList.remove('top-carousel-item--active', 'faceIn', 'faceOut')
    $('.top-carousel-dot--active').classList.remove('top-carousel-dot--active')
    if (currentIndex == undefined) {
        indexSlideActive++
    } else {
        indexSlideActive = currentIndex
    }
    if (indexSlideActive >= slides.length || indexSlideActive < 0) {
        indexSlideActive = 0
    }
    slides[indexSlideActive].classList.add('top-carousel-item--active', 'faceIn')
    dots[indexSlideActive].classList.add('top-carousel-dot--active')
}

const handlePreviousSlide = function(currentIndex) {
    $('.top-carousel-item--active').classList.remove('top-carousel-item--active', 'faceIn', 'faceOut')
    $('.top-carousel-dot--active').classList.remove('top-carousel-dot--active')
    if (currentIndex == undefined) {
        indexSlideActive--
    } else {
        indexSlideActive = currentIndex
    }
    if (indexSlideActive >= slides.length || indexSlideActive < 0) {
        indexSlideActive = slides.length - 1
    }
    slides[indexSlideActive].classList.add('top-carousel-item--active', 'faceOut')
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
        intervalNextSlide = setInterval(handleNextSlide, 8000)
    }
});

slides.forEach(function(slide, index) {
    slide.onmousedown = function(e) {
        var currentIndex = index
        let xFirst = e.pageX;
        slide.onmouseup = function(e) {
            let xChange = e.pageX - xFirst;
            if (xChange > 0) {
                clearInterval(intervalNextSlide)
                handlePreviousSlide(currentIndex - 1)
                intervalNextSlide = setInterval(handleNextSlide, 3000)
            } else if (xChange < 0) {
                clearInterval(intervalNextSlide)
                handleNextSlide(currentIndex + 1)
                intervalNextSlide = setInterval(handleNextSlide, 3000)
            }
        }
    }
})