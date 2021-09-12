(function() {
    $ = document.querySelector.bind(document);
    $$ = document.querySelectorAll.bind(document);

    let featuredTabs = $$('.featured-container .featured__tab-item')
    let featuredLine = $('.featured-container .featured__tab-line')
    let featuredPane = $$('.featured-container .featured__content-pane')

    let tabActive = $('.featured-container .featured__tab-item.featured__tab-item--active')
    featuredLine.style.left = tabActive.offsetLeft + 'px'
    featuredLine.style.width = tabActive.offsetWidth + 'px'
    featuredTabs.forEach((tab, index) => {
        const pane = featuredPane[index]
        tab.onclick = function() {
            $('.featured-container .featured__tab-item.featured__tab-item--active').classList.remove('featured__tab-item--active')
            $('.featured-container .featured__content-pane.featured__content-pane--active').classList.remove('featured__content-pane--active')

            this.classList.add('featured__tab-item--active')
            pane.classList.add('featured__content-pane--active')
            featuredLine.style.left = this.offsetLeft + 'px'
            featuredLine.style.width = this.offsetWidth + 'px'
        }
    });
    console.log(featuredLine)
    console.log(featuredPane)
})()