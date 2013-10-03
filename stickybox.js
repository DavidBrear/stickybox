/************************************************************
* About: SUIstickybox is a plugin to allow boxes
*   to stick to the window as the user scrolls past them.
*   To Use, simply call on whatever box you want to stick to
*   the window and when the user scrolls passed it, it will
*   "stick" to the window.
* Author: DavidBrear (d@vidbrear.com)
* Date: 1/25/2012                                    
************************************************************/

(function($){
	
	//add a class for when the box is stuck.
	//	options:
	//    stickyClass: class to apply when 'stuck'
	//    fixedHeaderHeight: the height of any fixed navigation on the page
	$.fn.stickybox = function(options)
	{
		$(this).each(function(idx, el)
		{
			var new_sticky = new StickyBox(el, options);
			$(window).scroll(function(evt)
			{
				new_sticky.updateTop();
			});
		});
	};
	function StickyBox(el, options)
	{
		this.el = $(el);
		this.options = $.extend({'stickyClass':'', 'fixedHeaderHeight':0}, options);
		
		this.position = this.el.css('position');
		this.off_left = this.el.offset().left;
		this.off_top = undefined;
		this.old_left = this.el.css('left');
		this.placeHolder = createPlaceHolder(this.el);
    if(!$.browser.msie){
		this.margins = this.el.css('margin');
    }
		this.old_width = this.el.width();
		this.old_z_index = this.el.css('z-index');
		this.updateTop = function()
		{
			if(this.off_top === undefined)
			{
				this.off_top = this.el.offset().top - this.options.fixedHeaderHeight;
			}
			if($(window).scrollTop() > this.off_top)
			{
				this.el.css('width', this.old_width);
				this.el.css('top', '-40px');
				this.el.css('left', this.off_left);
				this.el.css('position', 'fixed');
				this.el.css('margin', '0');
				this.el.css('z-index', 1000);
				this.el.addClass(this.options.stickyClass);
				this.placeHolder.show();
			}
			else
			{
				this.el.removeClass(this.options.stickyClass);
				this.el.css('left', this.old_left);
				this.el.css('margin', this.margins);
				this.el.css('position', this.position);
				this.el.css('z-index', this.old_z_index);
				this.placeHolder.hide();
			}
		};
	}
	function createPlaceHolder(el)
	{
		$place_holder = el.clone(false);
		$place_holder.html('abcd');
		$place_holder.css('width', el.width());
		$place_holder.css('height', el.height());
		$place_holder.css('visibility', 'hidden');
		$place_holder.hide();
		el.after($place_holder);
		return $place_holder;
	}
})(jQuery);
