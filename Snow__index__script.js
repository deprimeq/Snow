const header = document.querySelector('.header');
const navButton = document.querySelector('.nav__button');
const navLinks = document.querySelectorAll('.nav__link');

navButton.addEventListener('click', function() {
	header.classList.toggle('active');
});
for (var i = 0 ; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click' , function() {
    	header.classList.remove('active');
    }); 
};

const portfolio = document.querySelector('#portfolio');
window.innerWidth < 450 ? portfolio.classList.remove('container') : portfolio.classList.add('container');

//testimonials

let testimonialsPosition = 1;
let testimonialsSlidesToShow = 1;
let testimonialsSlidesToScroll = 1;
let testimonialsCarousel = document.querySelector('.testimonials__carousel');
let testimonialsTrack = document.querySelector('.testimonials__track');
let testimonialsItem = document.querySelectorAll('.testimonials__item');
let testimonialsPagination = document.querySelectorAll('.testimonials__bullet');
let testimonialsItemWidth = testimonialsCarousel.clientWidth / testimonialsSlidesToShow;
testimonialsItem.forEach((item) => {
	item.style.minWidth = testimonialsItemWidth + 'px';
});
testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth)) + 'px)';
let testimonialsX0 = null;
let testimonialsX1 = null;
let testimonialsX2 = null;
let testimonialsXPrev = null;
let testimonialsXFlag = 0;
testimonialsCarousel.addEventListener('mousedown', function() {
	testimonialsXFlag = 1;
	testimonialsX1 = event.clientX;
	testimonialsCarousel.style.cursor = 'grabbing';
});
testimonialsCarousel.addEventListener('mousemove', function() {
	if (testimonialsXFlag == 0) {return false};
	testimonialsX0 = event.clientX;
	testimonialsTrack.style.transition = 'none';
	testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth) + (testimonialsX0 - testimonialsX1)) + 'px)';
});
testimonialsCarousel.addEventListener('mouseup', function() {
	testimonialsXFlag = 0;
	testimonialsX2 = event.clientX;
	testimonialsCarousel.style.cursor = 'grab';
	if (testimonialsX2 - testimonialsX1 > 50) {
		testimonialsTrack.style.transition = 'transform 0.5s linear';
		testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth) + testimonialsSlidesToScroll * testimonialsItemWidth) + 'px)';
		testimonialsPosition--;
	};
	if(testimonialsX2 - testimonialsX1 < -50) {
		testimonialsTrack.style.transition = 'transform 0.5s linear';
		testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth) - testimonialsSlidesToScroll * testimonialsItemWidth) + 'px)';
		testimonialsPosition++;
	};
	if (testimonialsItem[testimonialsPosition].id == 'testimonials__lastClone') {
		testimonialsPosition = testimonialsItem.length - 2;
		setTimeout(() => {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth)) + 'px)';
		}, 500);
	};
	if (testimonialsItem[testimonialsPosition].id == 'testimonials__firstClone') {
		testimonialsPosition = 1;
		setTimeout(() => {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translateX(' + (-testimonialsItemWidth) + 'px)';
		}, 500);
	};
	testimonialsPagination.forEach((item) => {item.classList.remove('active');});
	testimonialsPagination[testimonialsPosition - 1].classList.add('active');
});

testimonialsCarousel.addEventListener('touchstart', function() {
	testimonialsXFlag = 1;
	testimonialsX1 = event.touches[0].clientX;
});
testimonialsCarousel.addEventListener('touchmove', function() {
	if (testimonialsXFlag == 0) {return false};
	testimonialsX0 = event.changedTouches[0].clientX;
	testimonialsTrack.style.transition = 'none';
	testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth) + (testimonialsX0 - testimonialsX1)) + 'px)';
});
testimonialsCarousel.addEventListener('touchend', function() {
	testimonialsXFlag = 0;
	testimonialsX2 = event.changedTouches[0].clientX;
	if (testimonialsX2 - testimonialsX1 > 50) {
		testimonialsTrack.style.transition = 'transform 0.5s linear';
		testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth) + testimonialsSlidesToScroll * testimonialsItemWidth) + 'px)';
		testimonialsPosition--;
	};
	if(testimonialsX2 - testimonialsX1 < -50) {
		testimonialsTrack.style.transition = 'transform 0.5s linear';
		testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth) - testimonialsSlidesToScroll * testimonialsItemWidth) + 'px)';
		testimonialsPosition++;
	};
	if (testimonialsItem[testimonialsPosition].id == 'testimonials__lastClone') {
		testimonialsPosition = testimonialsItem.length - 2;
		setTimeout(() => {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth)) + 'px)';
		}, 500);
	};
	if (testimonialsItem[testimonialsPosition].id == 'testimonials__firstClone') {
		testimonialsPosition = 1;
		setTimeout(() => {
			testimonialsTrack.style.transition = 'none';
			testimonialsTrack.style.transform = 'translateX(' + (-testimonialsItemWidth) + 'px)';
		}, 500);
	};
	testimonialsPagination.forEach((item) => {item.classList.remove('active');});
	testimonialsPagination[testimonialsPosition - 1].classList.add('active');
});

//clients

let clientsPosition = 7;
let clientWidth = window.innerWidth;
let clientsSlidesToShow = 5;
clientWidth > 976 ? clientsSlidesToShow = 5 : clientsSlidesToShow = 3;
let clientsSlidesToScroll = 1;
let clientsBlock = document.querySelector('.clients');
let clientsCarousel = document.querySelector('.clients__carousel');
let clientsTrack = document.querySelector('.clients__track');
let clientsItem = document.querySelectorAll('.clients__item');
window.innerWidth < 992 ? clientsSlidesToShow = 3 : clientsSlidesToShow = 5;
let clientsItemWidth = clientsCarousel.clientWidth / clientsSlidesToShow;
clientsItem.forEach((item) => {
	item.style.minWidth = clientsItemWidth + 'px';
});
clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
let clientsX0 = 'null';
let clientsX1 = null;
let clientsX2 = null;
let clientsXFlag = 0
clientsCarousel.addEventListener('mousedown', function() {
	clientsX1 = event.clientX;
	clientsXFlag = 1;
	clientsCarousel.style.cursor = 'grabbing';
});
clientsBlock.addEventListener('mousemove', function() {
	if (clientsXFlag == 0) {return false};
	clientsX0 = event.clientX;
	clientsBlock.style.cursor = 'grabbing';
	clientsTrack.style.transition = 'none';
	clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth) + (clientsX0 - clientsX1)) + 'px)';
});
clientsBlock.addEventListener('mouseup', function() {
	clientsBlock.style.cursor = 'default';
	clientsCarousel.style.cursor = 'grab';
	clientsXFlag = 0;
	if (clientsX0 == 'null') {return false};
	clientsX2 = event.clientX;
	clientsBlock.style.cursor = 'default';
	clientsTrack.style.transition = 'transform 0.2s linear';
	clientsPosition = clientsPosition - Math.round((clientsX0 - clientsX1) / clientsItemWidth);
	clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
	if (clientsPosition < 7) {
		setTimeout(function() {
			clientsTrack.style.transition = 'none';
			clientsPosition = 15 - (7 - clientsPosition);
			clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
		}, 200);
	};
	if (clientsPosition > 14) {
		setTimeout(function() {
			clientsTrack.style.transition = 'none';
			clientsPosition = 7 + (clientsPosition - 15);
			clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
		}, 200);
	};
	clientsX0 = 'null';
});
clientsCarousel.addEventListener('touchstart', function() {
	clientsX1 = event.touches[0].clientX;
	clientsX0 = clientsX1;
	clientsXFlag = 1;
});
clientsBlock.addEventListener('touchmove', function() {
	if (clientsXFlag == 0) {return false};
	clientsX0 = event.changedTouches[0].clientX;
	clientsTrack.style.transition = 'none';
	clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth) + (clientsX0 - clientsX1)) + 'px)';
});
clientsBlock.addEventListener('touchend', function() {
	if (clientsXFlag == 0) {return false};
	if (clientsX0 == 'null') {return false};
	clientsX2 = event.changedTouches[0].clientX;
	clientsXFlag = 0;
	clientsTrack.style.transition = 'transform 0.2s linear';
	clientsPosition = clientsPosition - Math.round((clientsX0 - clientsX1) / clientsItemWidth);
	clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
	if (clientsPosition < 7) {
		setTimeout(function() {
			clientsTrack.style.transition = 'none';
			clientsPosition = 15 - (7 - clientsPosition);
			clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
		}, 200);
	};
	if (clientsPosition > 14) {
		setTimeout(function() {
			clientsTrack.style.transition = 'none';
			clientsPosition = 7 + (clientsPosition - 15);
			clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
		}, 200);
	};
	clientsX0 = 'null';
});

//Latest blog

let latestSlidesToScroll  = 1;
let latestSlidesToShow = 3;
let latestPosition = 4;
let latestCount = 0;
let latestPagination = document.querySelectorAll('.latest-blog__bullet');
let latestBlock = document.querySelector('.latest-blog');
let latestCarousel = document.querySelector('.latest-blog__carousel');
let latestTrack = document.querySelector('.latest-blog__track');
let latestItem = document.querySelectorAll('.latest-blog__item');
if (window.innerWidth < 768) {latestSlidesToShow = 2};
if (window.innerWidth < 400) {latestSlidesToShow = 1};
let latestItemWidth = latestCarousel.clientWidth / latestSlidesToShow;
latestItem.forEach((item) => {
	item.style.minWidth = latestItemWidth + 'px';
});
latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
let latestX1 = null;
let latestX2 = null;
let latestX0 = null;
let latestXFlag = 0;
let latestFlag = 0;
let latestClass = null;
let latestClick = 0;
latestItem.forEach((item) => {
	item.addEventListener('contextmenu', function() {latestClick = 1});
	item.addEventListener('mousedown', function() {
		if (latestClick == 1) {return false};
		latestXFlag = 1;
		latestClass = item.className.split(' ')[1];
		latestX1 = event.clientX;
		latestCarousel.style.cursor = 'grabbing';
	});
});
latestBlock.addEventListener('mousemove', function() {
	if (latestClick == 1) {return false};
	if (latestXFlag == 0) {return false};
	latestFlag = 1;
	latestX0 = event.clientX;
	latestBlock.style.cursor = 'grabbing';
	latestTrack.style.transition = 'none';
	latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth) + (latestX0 - latestX1)) + 'px)';
});
latestBlock.addEventListener('mouseup', function() {
	latestClick = 0;
	latestBlock.style.cursor = 'default';
	latestCarousel.style.cursor = 'grab';
	latestXFlag = 0;
	if (latestClick == 1) {return false};
	if (latestFlag == 0) {
		window.location.href = 'Snow__blog_' + latestClass[latestClass.length - 1] + '.html';
		return false;
	};
	latestFlag = 0;
	latestX2 = event.clientX;
	latestTrack.style.transition = 'transform 0.2s linear';
	latestCount = latestCount - Math.round((latestX0 - latestX1) / latestItemWidth);
	latestPosition = latestPosition - Math.round((latestX0 - latestX1) / latestItemWidth);
	latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
	if (latestPosition < 4) {
		latestPosition = 9 - (4 - latestPosition);
		latestCount = 4 - (8 - latestPosition);
		setTimeout(function() {
			latestTrack.style.transition = 'none';
			latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
		}, 200);
	};
	if (latestPosition > 8) {
		latestPosition = 4 + (latestPosition - 9);
		latestCount = 4 - (8 - latestPosition);
		console.log(latestCount);
		setTimeout(function() {
			latestTrack.style.transition = 'none';
			latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
		}, 200);
	};
	latestPagination.forEach(function(item) {item.classList.remove('active');});
	latestPagination[latestCount].classList.add('active');
});
latestItem.forEach((item) => {
	item.addEventListener('touchstart', function() {
		latestXFlag = 1;
		let itemClass = item.className.split(' ')[1];
		latestX1 = event.touches[0].clientX;
	});
});
latestBlock.addEventListener('touchmove', function() {
	if (latestXFlag == 0) {return false};
	latestFlag = 1;
	latestX0 = event.changedTouches[0].clientX;
	latestTrack.style.transition = 'none';
	latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth) + (latestX0 - latestX1)) + 'px)';
});
latestBlock.addEventListener('touchend', function() {
	latestXFlag = 0;
	if (latestFlag == 0) {
		window.location.href = 'Snow__blog_' + latestClass[latestClass.length - 1] + '.html';
		return false;
	};
	latestFlag = 0;
	latestX2 = event.changedTouches[0].clientX;
	latestTrack.style.transition = 'transform 0.2s linear';
	latestCount = latestCount - Math.round((latestX0 - latestX1) / latestItemWidth);
	latestPosition = latestPosition - Math.round((latestX0 - latestX1) / latestItemWidth);
	latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
	if (latestPosition < 4) {
		latestPosition = 9 - (4 - latestPosition);
		latestCount = 4 - (8 - latestPosition);
		setTimeout(function() {
			latestTrack.style.transition = 'none';
			latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
		}, 200);
	};
	if (latestPosition > 8) {
		latestPosition = 4 + (latestPosition - 9);
		latestCount = 4 - latestPosition;
		setTimeout(function() {
			latestTrack.style.transition = 'none';
			latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
		}, 200);
	};
	latestPagination.forEach(function(item) {item.classList.remove('active');});
	latestPagination[latestCount].classList.add('active');
});

//Footer

const footer = document.querySelector('.footer');
const footerInstagram = document.querySelector('.footer__instagram');
const footerInstagramItem = document.querySelectorAll('.footer__instagram__item');
const footerInstagramCount = 4;
let footerInstagramSize = (footerInstagram.clientWidth - 30) / footerInstagramCount;
let footerInstagramHeight = footerInstagramSize * 2 + 50;
footer.style.gridTemplateRows = '200px ' + footerInstagramHeight + 'px';
footerInstagramItem.forEach(function(item) {
	item.style.height = footerInstagramSize + 'px';
	item.style.width = footerInstagramSize + 'px';
});

window.onscroll = function() {
	var scrollY = window.scrollY;
	scrollY > 30 ? header.classList.add('fixed') : header.classList.remove('fixed');
};

window.onresize = function() {
	var width = window.innerWidth;
	if (width > 576) {
		header.classList.remove('active');
	};

	width < 450 ? portfolio.classList.remove('container') : portfolio.classList.add('container');

	testimonialsItemWidth = testimonialsCarousel.clientWidth / testimonialsSlidesToShow;
	testimonialsItem.forEach((item) => {
		item.style.minWidth = testimonialsItemWidth + 'px';
	});
	testimonialsTrack.style.transition = "none"
	testimonialsTrack.style.transform = 'translateX(' + (-(testimonialsPosition * testimonialsItemWidth)) + 'px)';

	clientsItemWidth = clientsCarousel.clientWidth / clientsSlidesToShow;
	clientsItem.forEach((item) => {
		item.style.minWidth = clientsItemWidth + 'px';
	});
	clientsTrack.style.transition = "none"
	clientsTrack.style.transform = 'translateX(' + (-(clientsPosition * clientsItemWidth)) + 'px)';
	width < 992 ? clientsSlidesToShow = 3 : clientsSlidesToShow = 5;

	latestItemWidth = latestCarousel.clientWidth / latestSlidesToShow;
	latestItem.forEach((item) => {
		item.style.minWidth = latestItemWidth + 'px';
	});
	latestTrack.style.transition = "none"
	latestTrack.style.transform = 'translateX(' + (-(latestPosition * latestItemWidth)) + 'px)';
	if (width < 768) {latestSlidesToShow = 2};
	if (width < 400) {latestSlidesToShow = 1};

	footerInstagramSize = (footerInstagram.clientWidth - 30) / footerInstagramCount;
	let footerInstagramHeight = footerInstagramSize * 2 + 50;
	footer.style.gridTemplateRows = '200px ' + footerInstagramHeight + 'px';
	footerInstagramItem.forEach(function(item) {
		item.style.height = footerInstagramSize + 'px';
		item.style.width = footerInstagramSize + 'px';
	});
};