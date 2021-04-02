
window.addEventListener('DOMContentLoaded', ()=> {
	let slideIndex = 0
	const slides = Array.from(document.querySelectorAll('.slide'))

	const initSlides = (n) => {
		slides.forEach((slide) => { 
			slide.classList.remove('slide--active')
		})
		slides[n].classList.add('slide--active')
		slideIndex < slides.length - 1 ? slideIndex += 1 : slideIndex = 0
		setTimeout(() => {
			initSlides(slideIndex)
		},5000)
	}	
	initSlides(slideIndex)
})

const handleMobileNav = () => document.querySelector('.dropDown').classList.toggle('dropDown--active')
document.querySelector('.nav__button').addEventListener('click', handleMobileNav)