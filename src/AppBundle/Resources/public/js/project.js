jQuery(document).ready(function () {






//================================================================================================================================================
//              - Кнопка Наверх -  
//================================================================================================================================================
	jQuery(function() { 
		jQuery('.main .nano-content').scroll(function() { 
			if(jQuery(this).scrollTop() > 100) {
				jQuery('#toTop').fadeIn();
			} else {
				jQuery('#toTop').fadeOut();
			}

		});
		jQuery('#toTop').click(function() {
			jQuery('body,html').animate({scrollTop:0},800);
		}); 
	});






//================================================================================================================================================
//              -  открытие строк в таблице (подтаблица в таблице товаров) -
//================================================================================================================================================
    jQuery( '[data-category] .title-tr .product-item' ).click(function( event ) {
        // jQuery(this).toggleClass('active').closest('tr').next('tr.drop-category').slideToggle(300);
        var x = jQuery(this).closest('tr[data-category]').attr("data-category");
        // alert(x);
        jQuery('tr[data-category=' + x + ']').toggleClass('open');
    });



//  *********************************************************************************************************************************
});