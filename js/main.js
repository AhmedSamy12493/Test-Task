$("#list h2").click(function(){
    

    let listWidth =$("#list").innerWidth()
    let listLeft = $("#list").offset().left;
    if(listLeft == 0) {
        $("#list").animate({"left":`-${listWidth}px`},500);
    } else{
        $("#list").animate({"left":`0px`},500);
    }
    console.log(listWidth)
    

})
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true
	});
  });


