sticky_box
==========

A JQuery plugin for sticking boxes to the screen.

Usage
=====
-Basic
$('#some_element').sticky_box();

-Options
$('#some_element').sticky_box({'stickyClass':'something', 'fixedHeaderHeight':'40'});

#stickyClass:
  a class to apply to the box once it's in "stuck" mode
#fixedHeaderHeight
  a height (in pixels) of any fixed header on the page. This serves to
  stick the box below the fixed header.
