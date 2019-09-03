// Your code goes here
//import 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js';

//1
const imgScale = document.querySelector('.logo-heading');
imgScale.addEventListener('mouseenter', (e) => {
	imgScale.style.transform = 'scale(1.4)';
	imgScale.style.transition = 'transform 0.6s';
});
//2
imgScale.addEventListener('mouseleave', (e) => {
	imgScale.style.transform = 'scale(1)';
	imgScale.style.transition = 'transform 0.6s';
});

//3
const navScale = document.querySelectorAll('a');
navScale.forEach((element) => {
	element.addEventListener('mouseenter', (e) => {
		element.style.transform = 'scale(2)';
		element.style.color = 'red';
		element.style.transition = 'transform 0.4s';
	});
	//4
	element.addEventListener('mouseleave', (e) => {
		element.style.transform = 'scale(1)';
		element.style.color = 'black';
		element.style.transition = 'transform 0.4s';
	});
});
//5
const removePicture = document.querySelectorAll('img');
removePicture.forEach((element) => {
	element.addEventListener('dblclick', (e) => {
		element.style.display = 'none';
	});
});

//6
window.addEventListener('load', (e) => {
	alert('Welcome to the Fun Bus!');
});

//7
var x = 0;
const scrollNumber = document.querySelector('.counter');
window.addEventListener('scroll', (e) => {
	x++;
	scrollNumber.innerHTML = x;
});

//8
const btnColor = document.querySelectorAll('.btn');
btnColor.forEach((element) => {
	element.addEventListener('click', (e) => {
		element.style.color = 'pink';
		element.style.background = 'purple';
	});
	//9
	element.addEventListener('dblclick', (e) => {
		element.style.color = 'white';
		element.style.background = '#17A2B8';
	});
});

//10
const letGo = document.querySelector('.go');
letGo.addEventListener('mousedown', (e) => {
	letGo.innerHTML = 'LET GO OF ME!';
});
letGo.addEventListener('mouseup', (e) => {
	letGo.innerHTML = "Let's Go!";
});

var rotY = 0;
const imgFlip = document.querySelector('.bus-pic');
imgFlip.addEventListener('click', (e) => {
	rotY += 180;
	imgFlip.style.backgroundcolor = 'pink';
	TweenMax.to(imgFlip, 2, {
		rotationY: rotY,
		ease: Power1.easeInOut
	});
});
