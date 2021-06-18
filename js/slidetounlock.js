$(function() {

	async function abc(resolve)
	{
	await new Promise(resolve => setTimeout(resolve, 2000));
}

	$('#slider')[0].addEventListener('touchmove', function(event) {
	    event.preventDefault();
	    var el = event.target;
	    var touch = event.touches[0];
	    var curX = touch.pageX - this.offsetLeft - 73;
	    if(curX <= 0) return;
	    if(curX > 250){
			document.getElementById("toChange").style.opacity = "0"
			curX=250;
				setTimeout(()=>{
					document.getElementById("container5").classList.remove("r-6")
					document.getElementById("container5").classList.add("r-5")
					curX=0	
				},1000)	
	    }
	   	abc(el.style.webkitTransform = 'translateX(' + curX + 'px)') 
	}, false);
	
	$('#slider')[0].addEventListener('touchend', function(event) {	
	    this.style.webkitTransition = '-webkit-transform 0.1s ease-in';
	    this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
		setTimeout(()=>{
	    this.style.webkitTransform = 'translateX(0px)';
	},1000)
	}, false);

});
