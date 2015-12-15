console.log("yo javascript is linked");


function Clock(el, rpy) {
  this.elem = $("#" + el);
  this.hand = this.elem.find('.hand');
  this.flash = this.elem.find('.flash');
  this.degree = this.calculateStep(rpy);
  this.pos = 0;
};

Clock.prototype.step = function () {
  this.pos = (this.pos + this.degree);
  this.hand.css({transform: "rotate("+this.pos+"deg)"});
};

Clock.prototype.calculateStep = function (rpy) {
  var rotationsPerSecond = rpy / 31536000;
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
  }, 1000, this);
};



var clock1  = new Clock("hand1", 10430435);
var clock2  = new Clock("hand2", 452514);
var clock3  = new Clock("hand3", 8495475);
var clock4  = new Clock("hand4", 525430); //est
var clock5  = new Clock("hand5", 1298969);
var clock6  = new Clock("hand6", 1588211);
var clock7  = new Clock("hand7", 832433);
var clock8  = new Clock("hand8", 4000000); //est
var clock9  = new Clock("hand9", 234385); //est
var clock10  = new Clock("hand10", 7204); //est
var clock11  = new Clock("hand11", 7100000); //est
var clock12  = new Clock("hand12", 32727);
var clock13  = new Clock("hand13", 6906156);
var clock14  = new Clock("hand14", 0);
var clock15  = new Clock("hand15", 385664);
var clock16  = new Clock("hand16", 4183499);
var clock17  = new Clock("hand17", 0);
var clock18  = new Clock("hand18", 0);
var clock19  = new Clock("hand19", 1549945);
var clock20  = new Clock("hand20", 717617);
var clock21  = new Clock("hand21", 725626);
var clock22  = new Clock("hand22", 0);
var clock23  = new Clock("hand23", 277395);
var clock24  = new Clock("hand24", 0);
var clock25  = new Clock("hand25", 1550844);
var clock26  = new Clock("hand26", 555473);
var clock27  = new Clock("hand27", 0);
var clock28  = new Clock("hand28",  5401335);
var clock29  = new Clock("hand29", 0);
var clock30  = new Clock("hand30", 0);
var clock31  = new Clock("hand31", 429888);
var clock32  = new Clock("hand32", 22625);

clock1.startSpin();
clock2.startSpin();
clock3.startSpin();
clock4.startSpin();
clock5.startSpin();
clock6.startSpin();
clock7.startSpin();
clock8.startSpin();
clock9.startSpin();
clock10.startSpin();
clock11.startSpin();
clock12.startSpin();
clock13.startSpin();
clock14.startSpin();
clock15.startSpin();
clock16.startSpin();
clock17.startSpin();
clock18.startSpin();
clock19.startSpin();
clock20.startSpin();
clock21.startSpin();
clock22.startSpin();
clock23.startSpin();
clock24.startSpin();
clock25.startSpin();
clock26.startSpin();
clock27.startSpin();
clock28.startSpin();
clock29.startSpin();
clock30.startSpin();
clock31.startSpin();
clock32.startSpin();

// Fix for Parallax Background Height ==================== //


var mainh = $("main").height();

function calculateHeight() {
  $(".parallax_background").height(mainh);
}

$(document).ready( function() {
  calculateHeight();
  console.log("background height is now " + $(".parallax_background").height())
})




















