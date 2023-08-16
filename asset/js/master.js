let y = 1

function navbar() {
    if (y == 1) {
        document.getElementById('header-banner').style.display = 'none'
        document.getElementById('header-banner').style.opacity = '0'
        document.getElementById('header-nav').style.position = 'fixed'
        document.getElementById('header-nav').style.animation = 'navbar linear .5s'


    }
    let m = window.pageYOffset
    if (m == 0) {
        document.getElementById('header-banner').style.display = 'flex'
        document.getElementById('header-banner').style.opacity = '1'
        document.getElementById('header-nav').style.position = 'relative'
        document.getElementById('header-nav').style.animation = 'none'
    }
}