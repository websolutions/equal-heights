# EqualHeights

Simple, responsive equal heights plugin for jQuery.

## Installation

Install via [Bower](http://bower.io):
```
$ bower install websolutions/equal-heights --save
```

## Usage

The most basic example follows this DOM structure:
``` html
<ul class="gallery">
  <li>
    [...]
  </li>
  <li>
    [...]
  </li>
  <li>
    [...]
  </li>
</ul>
```

And is initialized like so:
``` javascript
$(".gallery > li").equalHeights();
```

The plugin can also be removed afterwards:
``` javascript
$(".gallery > li").unequalHeights();
```
