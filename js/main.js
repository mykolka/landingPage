//slider portfolio

var slides = document.querySelectorAll('.portfolio__slides .sliderItem');
var indecators = document.querySelectorAll('.sliderNav__indecators .sliderNav__indecator');
var currentIndecator = 0;
var currentSlide = 0;
var slideInterval = setTimeout(nextSlide,100);

function nextSlide() {
	goToSlide(currentSlide+1);
}

function previousSlide() {
	goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'sliderItem';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'currentItem';

	indecators[currentIndecator].className = "sliderNav__indecator";
	currentIndecator = (n+indecators.length)%indecators.length;
	indecators[currentIndecator].className = "active";
   
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
nextSlide();
};
previous.onclick = function() {
previousSlide();
};

//slider revious

var items = document.querySelectorAll('.slider-container .slider-item');
var pointers = document.querySelectorAll('.pointers .pointer');
var currentPointer = 0;
var currentItem = 0;
var itemInterval = setTimeout(nextItem,100);

function nextItem() {
	goToItem(currentItem+1);
}

function previousItem() {
	goToItem(currentItem-1);
}

function goToItem(n) {
    items[currentItem].className = 'slider-item';
    currentItem = (n+items.length)%items.length;
    items[currentItem].className = 'activated';

	pointers[currentPointer].className = "pointer";
	currentPointer = (n+pointers.length)%pointers.length;
	pointers[currentPointer].className = "actualPointer";
   
}

var right = document.getElementById('right');
var left = document.getElementById('left');

right.onclick = function() {
nextItem();
};
left.onclick = function() {
previousItem();
};

//scroll
/*
document.addEventListener("click", function(event){
  var url = location.href.slice(0, location.href.length - location.hash.length);
  var targetHref = event.target.href || "";
  if(targetHref.slice(0, url.length) === url && targetHref[url.length] === "#"){
    event.preventDefault();
    var hash = targetHref.slice(url.length + 1);
    var element = document.getElementById(hash);
    if(element){
      var scrollTo = element.getBoundingClientRect().top;
      smorthScrollTo(scrollTo);
    }
  }
});
 
function smorthScrollTo(to){
  var newScrollY = window.scrollY;
  var loop = function(){
    newScrollY += (to - newScrollY) / 10;
    
    if(Math.abs(newScrollY - to) <= 1){
      newScrollY = to;
    }else{
      requestAnimationFrame(loop);
    }
    window.scrollTo(window.scrollX, newScrollY);
  };
  
  loop();
};*/