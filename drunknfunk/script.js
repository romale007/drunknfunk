const navBarTogglerEl = document.querySelector('.navbar-toggler');
const navContentEl = document.querySelector('#navContent');
const firstSectionEl = document.querySelector('#aboutus')

const isElementVisibleOnClick = handle => {
    const dimensions = handle.getBoundingClientRect();
    return !(dimensions.height && dimensions.width)
}

navBarTogglerEl.onclick = function() {
    const isCollapsed = !isElementVisibleOnClick(navContentEl);
    const windowHeight = document.documentElement.clientHeight;
    isCollapsed ? firstSectionEl.setAttribute("style", `margin-top: 0px;`) :
        firstSectionEl.setAttribute("style", `margin-top: ${windowHeight/4}px;`)
}