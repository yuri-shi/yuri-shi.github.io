$(function(){
	$('.button').on('click',function(){
		$('.upper').hide("slide", {direction: "up"}, 1000);
		$('.lower').hide("slide", {direction: "down"}, 1000);
		$('#under-cover').fadeIn(1500);
		$('.cover').fadeOut(1000);
	});
});

//boxクリック動作//
$(function(){
	$('#box-profile').on('click',function(){
		$('.content').fadeOut();
		$('#detail-box-profile').fadeIn(2000);
	});
});

$(function(){
	$('#box-contact').on('click',function(){
		$('.content').fadeOut();
		$('#detail-box-contact').fadeIn(2000);
	});
});


//ヘッダーのナビ動作//
$(function(){
	$('#TOP').on('click',function(){
		$('.detail-box').hide();
		$('.content').fadeIn();
	});
});

$(function(){
	$('#PROFILE').on('click',function(){
		$('.content').hide();
		$('#detail-box-contact').hide();
		$('#detail-box-profile').fadeIn();
	});
});

$(function(){
	$('#CONTACT').on('click',function(){
		$('.content').hide();
		$('#detail-box-profile').hide();
		$('#detail-box-contact').fadeIn();
	});
});

$(function(){
	// location.hash: #nosplash&contact
	// location.hash.substr(1): nosplash&contact
	// location.hash.substr(2): osplash&contact
	var hash = location.hash.substr(1); // nosplash&contact
	// hash.split('&'): ['nosplash', 'contact']
	//console.log(hash);
	hash.split('&').forEach(function(x){
		if (x == "nosplash") {
			$(".cover").hide();
			$("#under-cover").show();
		} else if (x == "profile") {
			$('#PROFILE').click();
		} else if (x == "contact") {
			$('#CONTACT').click();
		}
	});
	
});