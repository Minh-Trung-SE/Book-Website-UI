$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)
let tabs = $$('.header-nav__item')
let tabElement = $('.header-nav-list')
let line = $('.header-nav-list>.line')
let tabActiveIndex = 0

;
(function() {
    let activeTab = $('.header-nav__item.active')
    line.style.left = activeTab.offsetLeft + 'px';
    line.style.top = activeTab.offsetHeight + 'px';
    line.style.width = activeTab.offsetWidth + 'px';
    tabs.forEach(function(element, index) {

        if (element.classList.contains('active')) {
            tabActiveIndex = index
        }

        element.onmouseover = function(e) {
            if (!element.classList.contains('active')) {
                element.classList.add('active')
                line.style.left = this.offsetLeft + 'px';
                line.style.top = this.offsetHeight + 'px';
                line.style.width = this.offsetWidth + 'px';
            }
            if (index != tabActiveIndex) {
                tabs[tabActiveIndex].classList.remove('active')
            }
        }

        element.onmouseout = function(e) {
            element.classList.remove('active')
            e.stopPropagation()
        }
    })

    tabElement.onmouseleave = function() {
        line.style.left = (tabs[tabActiveIndex].offsetLeft) + 'px';
        line.style.top = tabs[tabActiveIndex].offsetHeight + 'px';
        line.style.width = tabs[tabActiveIndex].offsetWidth + 'px';
        tabs[tabActiveIndex].classList.add('active')
    }
})()