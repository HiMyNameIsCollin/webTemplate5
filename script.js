/*const slides = Array.from(document.querySelector('.slideShow').children)
const startSlideShow = (arr, n) => {

let slideIndex = 0

window.addEventListener('DOMContentLoaded', () => {
	startSlideShow(slides, slideIndex)
})*/

const handleMobileNav = () => {
	document.querySelector('.dropDown').classList.toggle('dropDown--active')
}

document.querySelector('.nav__button').addEventListener('pointerdown', handleMobileNav)