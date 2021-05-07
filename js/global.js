$(function () {
	//二级导航显示隐藏
  $('.m-categorys').hover(function(){
  	$('.m-meun').addClass('show');
  },function(){
  	$('.m-meun').removeClass('show');
  });
  $('.m-meun .m-itme').hover(function(){
  	$(this).addClass('active');
  },function(){
  	$(this).removeClass('active');
  })
  
  $('.m-meun .m-three li').hover(function(){
  	 $(this).addClass('active');
  },function(){
  	$(this).removeClass('active');
  })
	// 顶部公告切换
	if($('.y_choicelist.owl-carousel').length && $.fn.owlCarousel){
		$('.y_choicelist.owl-carousel').owlCarousel({
		   items:1,
		   itemsDesktop:false,
		   itemsDesktopSmall:false,
		   itemsTablet:false,
		   navigation: true,
		   navigationText: false,
		   pagination: false,
		   slideSpeed: 500
	  });
	};
})
