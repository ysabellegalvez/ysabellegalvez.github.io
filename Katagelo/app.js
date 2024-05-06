const stickySections = [...document.querySelectorAll('.sticky-wrap')]

window.addEventListener('scroll', e=> {
	for(let i=0; i < stickySections.length; i++){
		transform(stickySections[i])
	}
})


function transform(section) {
	const offsetTop = section.parentElement.offsetTop;
	const scrollSection = section.querySelector('.horizontal-scroll')
	let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 150;
	percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
	scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)` 
}

// PROGRESS BAR 
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
