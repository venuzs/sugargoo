//B2B2C商品详情页js
$(function(){
	// 商品详情促销活动查看更多
	$(".prodtdeti_rt .sales_attr dd").hover(function(){
		$(this).parents(".sales_attr").addClass("active");
	},function(){
		$(this).parents(".sales_attr").removeClass("active");
	});
	
	//详情页选择商品属性
	$(".y_cosdata dd .y_item:not(.disabled)").click(function(e){
		$(this).addClass("active").siblings().removeClass("active");
		e.preventDefault();
	});

	// 详情页选择上门服务
	$(".y_doordata dd .y_item").click(function(e){
		$(this).toggleClass("active");
		e.preventDefault();
	});

	// 点击预售说明跳转到预售说明tab
	$(document).on("click",".y_presaleinfobtn",function(){
		$(".y_infotitle li").removeClass("active");
		$(".y_infotitle li a[href='#y_presaleInfo']").parent().addClass("active");
		var top = $(".y_infotitle").offset().top;
		$('body,html').animate({scrollTop:top},200);
	});
	

	//详情页套餐商品切换
	if($('.y_packagelist.owl-carousel').length && $.fn.owlCarousel){
		$('.y_packagelist.owl-carousel').owlCarousel({
		   items:6,
		   itemsDesktop:false,
		   itemsDesktopSmall:false,
		   itemsTablet:false,
		   navigation: true,
		   navigationText: false,
		   pagination: false,
		   slideSpeed: 500
	  });
	};
	
	//已下架商品详情页-商品信息右侧-猜你喜欢商品分类
	if($('.underfram_product.owl-carousel').length && $.fn.owlCarousel){
		$('.underfram_product.owl-carousel').owlCarousel({
		  items: 5,
      itemsDesktop : [1409,4],
      itemsDesktopSmall: [1209,3],
      itemsTablet: [1023,1],
      navigationText : false,
      scrollPerPage: true,
      autoPlay: 5000,
      slideSpeed: 800,
      navigation: true
	  });
	};
	
	//商品不存在详情页-底部推荐商品
	if($('.container_product.owl-carousel').length && $.fn.owlCarousel){
		$('.container_product.owl-carousel').owlCarousel({
		  items: 7,
      itemsDesktop : [1409,6],
      itemsDesktopSmall: [1209,5],
      itemsTablet: [1023,4],
      navigationText : false,
      scrollPerPage: true,
      autoPlay: 5000,
      slideSpeed: 800,
      navigation: true
	  });
	};
	
	//商品收藏成功推荐商品
	if($('.y_collpdowl.owl-carousel').length && $.fn.owlCarousel){
		$('.y_collpdowl.owl-carousel').owlCarousel({
		  items: 3,
      itemsDesktop : [1409,3],
      itemsDesktopSmall: [1209,3],
      itemsTablet: [1023,3],
      navigationText : false,
      scrollPerPage: true,
      autoPlay: 5000,
      slideSpeed: 800,
      navigation: true
	  });
	};
  
  	//商品详情页放大镜及相应的滚动、小图切换的js
	var	carouselContainer = $('#product-carousel'),
        productImg =  $('#product-image');
  	if($.fn.elastislide) {
		carouselContainer.elastislide({
			orientation : 'horizontal',
			minItems : 5
		});
	}
	// Product page zoom plugin settings
	if ($.fn.elevateZoom) {
		$('#product-image').elevateZoom({
			responsive: false, // simple solution for zoom plugin down here // it can cause bugs at resize
			zoomType: 'window', // you can use 'inner' or 'window' // change inner and go to product.html page and see zoom plugin differances
			borderColour: '#eee',
			cursor: "crosshair",
			borderSize: 1,
			lensSize : 180,
			lensOpacity: 1,
			lensColour: 'rgba(255, 255, 255, 0.25)'
		});

		$('#product-carousel').find('a').on('mouseover', function (e) {
			var ez = $('#product-image').data('elevateZoom'),
				smallImg = $(this).attr("data-image"),
				bigImg = $(this).attr("data-zoom-image");
				$(this).parent().addClass("active").siblings().removeClass("active");
				ez.swaptheimage(smallImg, bigImg);
			e.preventDefault();
		});
	};
	//商品详情页放大镜及相应的滚动、小图切换的js end
})