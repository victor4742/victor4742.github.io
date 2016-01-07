
/*side bar navigation set items as active when clicked*/
/*function navActive(item){
    var url = item.href;
    $('.my-side-nav .nav').find('.active').removeClass('active');
    $('.my-side-nav .nav li a').each(function () {
    	if (this.href == url) {
    		console.log(this.href + "  " + url);
        	$(this).parent().addClass('active');
    	}
    }); 
};

*/
/** update sidebar */
var lion = $('#lion').offset().top - 5;
var calFlame = $('#cal-flame').offset().top - 5;
var fireMagic = $('#fire-magic').offset().top - 5;


$(window).scroll(function(){
	//get container scroll position
	var fromTop = $(this).scrollTop();

	if(fromTop >= fireMagic){
		$('.my-side-nav .nav li').removeClass('active');
		$('.side-nav3').addClass('active')
	} else if(fromTop >= calFlame) {
		$('.my-side-nav .nav li').removeClass('active');
		$('.side-nav2').addClass('active');
	} else {
		$('.my-side-nav .nav li').removeClass('active');
		$('.side-nav1').addClass('active');
	}
});