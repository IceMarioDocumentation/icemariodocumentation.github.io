const navWidth = 275

function openNav() {
    document.getElementById("nav").style.left = "0px";
}
function closeNav(e) {
    document.getElementById("nav").style.left = `-${navWidth+5}px`;
}

function handleClick(e) {
    let isNav = e.target == document.getElementById('nav')
    let isLink = e.target.tagName.toLowerCase() == 'a'
    let isButton = e.target == document.getElementById('nav-openbtn')
    let isOpen = document.getElementById("nav").style.left == '0px'
    let isMobile = window.innerWidth < 900

    if (isButton || !isMobile || isLink)
        return

    if (!isNav && !isButton)
        closeNav()
}
function handleNavButton() {
    if (document.getElementById("nav").style.left == '0px')
        closeNav()
    else
        openNav()
}

var screenWidth = window.innerWidth
function handleResize(e) {
    let isMobile = window.innerWidth < 900
    // add width checker since ios causes event to trigger if swiping up
    if (window.innerWidth == screenWidth)
        return
    screenWidth = window.innerWidth

    if (isMobile)
        closeNav(e)
    else
        openNav()
}

window.addEventListener('click', (e) => handleClick(e));
window.addEventListener('touchstart', (e) => handleClick(e));
window.addEventListener('resize', (e) => handleResize(e)) 