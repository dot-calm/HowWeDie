console.log("yo javascript is linked");


function Clock(element) {
  var elem = $(element);
  this.rpy = elem.data('rpy');
  this.hand = elem.find('.hand');
  this.flash = elem.find('.flash');
  this.counter = elem.find('.counter');
  this.degree = this.calculateStep();
  this.pos = 0;
  this.timePerIncrement = this.timePerTenThousandth();
  this.setInitialCount();
  this.startSpin();
};

Clock.prototype.timePerTenThousandth = function () {
  // var perOneSecond =  (365 * 24 * 60 * 60 * 1000)/
};

Clock.prototype.deathsSoFar = function () {
  var currentTime = new Date();
  var begginningOfYear = new Date(currentTime.getFullYear(), 0, 1);
  var yearElapsed = currentTime.getTime() - begginningOfYear.getTime();
  var percentYear = yearElapsed/(365 * 24 * 60 * 60 * 1000);
  return this.rpy * percentYear;
};

Clock.prototype.setInitialCount = function () {
  this.counter.text(this.deathsSoFar().toFixed(4));
};

Clock.prototype.step = function () {
  this.pos = (this.pos + this.degree);
  this.hand.css({transform: "rotate("+this.pos+"deg)"});
};

Clock.prototype.calculateStep = function () {
  var rotationsPerSecond = this.rpy / 31536000;
  return rotationsPerSecond * 360;
};

Clock.prototype.shouldFlash = function () {
	return this.pos % 360 < this.degree;
};

Clock.prototype.triggerFlash = function () {
	var self = this;
	if (self.shouldFlash()) {
	   setTimeout( function () {
	   		self.animateFlash();
	   }, ((this.degree - (this.pos % 360)) / this.degree) * 1000);
	}
};

Clock.prototype.animateFlash = function () {
	this.flash.animate({
   		opacity:1
    }, 0)
    .animate({
	 	  opacity:0
    }, 2800, "easeOutExpo");
};

Clock.prototype.startSpin = function () {
  var self = this;
  setTimeout(function () {
    self.step();
    self.triggerFlash();
    self.startSpin();
  }, 1000);
  return this;
};


$('.clock-wrapper').each(function (index, element) {
  var clock = new Clock(element);
});


// MOVE ALL THESE NUMBERS TO DATA ATTRIBUTES

// var clock1  = new Clock("hand1", 10430435);
// var clock2  = new Clock("hand2", 452514);
// var clock3  = new Clock("hand3", 8495475);
// var clock4  = new Clock("hand4", 525430); //est
// var clock5  = new Clock("hand5", 1298969);
// var clock6  = new Clock("hand6", 1588211);
// var clock7  = new Clock("hand7", 832433);
// var clock8  = new Clock("hand8", 4000000); //est
// var clock9  = new Clock("hand9", 234385); //est
// var clock10  = new Clock("hand10", 7204); //est
// var clock11  = new Clock("hand11", 7100000); //est
// var clock12  = new Clock("hand12", 32727);
// var clock13  = new Clock("hand13", 6906156);
// var clock14  = new Clock("hand14", 0);
// var clock15  = new Clock("hand15", 385664);
// var clock16  = new Clock("hand16", 4183499);
// var clock17  = new Clock("hand17", 0);
// var clock18  = new Clock("hand18", 0);
// var clock19  = new Clock("hand19", 1549945);
// var clock20  = new Clock("hand20", 717617);
// var clock21  = new Clock("hand21", 725626);
// var clock22  = new Clock("hand22", 0);
// var clock23  = new Clock("hand23", 277395);
// var clock24  = new Clock("hand24", 0);
// var clock25  = new Clock("hand25", 1550844);
// var clock26  = new Clock("hand26", 555473);
// var clock27  = new Clock("hand27", 0);
// var clock28  = new Clock("hand28",  5401335);
// var clock29  = new Clock("hand29", 0);
// var clock30  = new Clock("hand30", 0);
// var clock31  = new Clock("hand31", 429888);
// var clock32  = new Clock("hand32", 22625);

// Fix for Parallax Background Height ==================== //


var mainh = $("main").height();

function calculateHeight() {
  $(".parallax_background").height(mainh);
}

$(document).ready( function() {
  calculateHeight();
  console.log("background height is now " + $(".parallax_background").height())
})




















