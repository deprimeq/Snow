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

window.onscroll = function() {
	var scrollY = window.scrollY;
	scrollY > 30 ? header.classList.add('fixed') : header.classList.remove('fixed');
};

const headerImg = document.querySelector('.header__img');
const headerBg = document.querySelector('.header__bg-picture');
headerBg.style.background = 'url(' + headerImg.src + ') center no-repeat';
headerBg.style.backgroundSize = 'cover';

let comments = [];
loadComments();
document.getElementById('comment__button').onclick = function() {
	event.preventDefault();
	let commentName = document.getElementById('comment__name');
	let commentText = document.getElementById('comment__text');
	let comment = {
		name : commentName.value,
		text : commentText.value,
		time : Math.floor(Date.now()/1000),
	};
	commentName.value = '';
	commentText.value = '';
	comments.push(comment);
	saveComments();
	showComments();
};
function saveComments() {
	localStorage.setItem('comments',  JSON.stringify(comments));
};
function loadComments() {
	if (localStorage.getItem('comments')) {comments = JSON.parse(localStorage.getItem('comments'))};
	showComments();
};
function showComments() {
	let commentsField = document.getElementById('comments__field');
	let out = `<div class="comments__item">
						<div class="comments__flex">
							<div class="comments__img">
								<img src="http://unvab.com/snow-free-html/assets/images/avatar-1.jpg">
							</div>
							<div class="comments__item__inner">
								<div class="comments__information">
									<div class="comments__name">John Leonard</div>
									<div class="comments__date">20 september, 2016</div>
									<a href="#leave__comment" class="comments__reply">Reply</a>
								</div>
								<div class="comments__text">Nullam ac dui et purus malesuada gravida id fermentum orci. In eu ipsum quis urna hendrerit condimentum vitae a mauris. In congue turpis purus, vitae tempus ante id. Donec orci arcu, sagittis ut finibus vitae.</div>
							</div>
						</div>
						<div class="comments__small__item">
							<div class="comments__flex">
								<div class="comments__img">
									<img src="	http://unvab.com/snow-free-html/assets/images/avatar-2.jpg">
								</div>
								<div class="comments__item__inner">
									<div class="comments__information">
										<div class="comments__name">Jody Parker</div>
										<div class="comments__date">20 september, 2016</div>
										<a href="#leave__comment" class="comments__reply">Reply</a>
									</div>
									<div class="comments__text">Aenean eget varius augue, nec gravida lectus. Pellentesque in imperdiet us, ac efficitur risus. Etiam laoreet dapibus lorem vitae aliquam. Sed elementum ligula, molestie consectetur massa rhoncus at.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="comments__item">
						<div class="comments__flex">
							<div class="comments__img">
								<img src="http://unvab.com/snow-free-html/assets/images/avatar-3.jpg">
							</div>
							<div class="comments__item__inner">
								<div class="comments__information">
									<div class="comments__name">Katie Anderson</div>
									<div class="comments__date">21 september, 2016</div>
									<a href="#leave__comment" class="comments__reply">Reply</a>
								</div>
								<div class="comments__text">To set. Lights likeness after, stars void in doesn't subdue.</div>
							</div>
						</div>
					</div>`;
	comments.forEach(function(item) {
		out += `<div class="comments__item">
						<div class="comments__flex">
							<div class="comments__img">
								<img src="Snow__assets/avatar.jpg">
							</div>
							<div class="comments__item__inner">
								<div class="comments__information">
									<div class="comments__name">${item.name}</div>
									<div class="comments__date">${timeConverter(item.time)}</div>
									<div class="comments__reply">Reply</div>
								</div>
								<div class="comments__text">${item.text}</div>
							</div>
						</div>
					</div>`;
	});
	commentsField.innerHTML = out;
};
function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var minute = a.getMinutes();
	var second = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + minute + ':' + second;
	return time;
};