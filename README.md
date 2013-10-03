# StickyBox

A JQuery plugin for sticking boxes to the screen.

### Usage
##### Basic
```javascript
$('#some_element').stickybox();
```

###### With Options
```javascript
$('#some_element').stickybox({'stickyClass':'something', 'fixedHeaderHeight':'40'});
```

###Options
##### stickyClass
  a class to apply to the box once it's in "stuck" mode
##### fixedHeaderHeight
  a height (in pixels) of any fixed header on the page. This serves to
  stick the box below the fixed header.
