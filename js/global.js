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
	
	// 模态框
	jQuery.extend({
		elShow: function (ele) {
		  $('body').addClass('el-popup-parent--hidden');
		  $(ele).css({'display':'block','z-index':'2082'}).find('.el-message-box').addClass('msgbox-fade-enter-active')
		},
		elHide: function (ele) {
			$('body').removeClass('el-popup-parent--hidden');
			$(ele).removeClass('msgbox-fade-enter-active').find('.el-message-box').addClass('msgbox-fade-leave-active');
			setTimeout(function () {
				$(ele).css({'display':'none','z-index':'2067'}).find('.el-message-box').removeClass('msgbox-fade-leave-active')
			},300)
		}
	})
	$(document).on('click','.v-modal,.el-message-box__headerbtn',function (e) {
		$.elHide('.el-message-box__wrapper')
	})
})
