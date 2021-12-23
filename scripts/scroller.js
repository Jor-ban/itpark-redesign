const upArrow = document.createElement('div')
const body = document.getElementsByTagName('body').item(0)
body.appendChild(upArrow)
upArrow.classList.add('scroller-up-arrow')
upArrow.classList.add('hidden')
upArrow.innerHTML = `
<svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4999 2.80005L13.5075 1.79242L12.4999 0.784794L11.4923 1.79242L12.4999 2.80005ZM24.9075 13.1924L13.5075 1.79242L11.4923 3.80768L22.8923 15.2077L24.9075 13.1924ZM11.4923 1.79242L0.0922752 13.1924L2.10753 15.2077L13.5075 3.80768L11.4923 1.79242Z" fill="white"/>
</svg>`
upArrow.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
window.onscroll = function () {
    if (window.scrollY < 500) {
        upArrow.classList.add('hidden')
    } else {
        upArrow.classList.remove('hidden')
    }
}