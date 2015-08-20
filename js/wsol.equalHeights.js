/**
 * wsol.equalHeights.js 2.0.1
 * http://github.com/websolutions/equal-heights
 */

;(function ($, window, document, undefined) {
  if (!$.wsol) {
    $.wsol = {};
  }

  var $window = $(window),
      groups = 0;

  $.wsol.equalHeights = function(group) {
    var base = this;

    base.$group = $(group);
    base.group = group;
    base.groupId = groups++;

    base.$group.data("wsol.equalHeights", base);

    base.init = function() {
      base.equalize();

      // Handle events
      $window.on("debouncedresize.wsol.equalHeights.equalHeights-" + base.groupId, base.equalize);
    };

    base.equalize = function() {
      var maxHeight = 0;
      base.$group.css("height", "auto").each(function() {
        var itemHeight = $(this).outerHeight(true);
        if (itemHeight > maxHeight) maxHeight = Math.ceil( itemHeight + 1 );
      }).css("height", maxHeight);
    };

    base.destroy = function() {
      base.$group.css("height", "");

      // Remove event listeners
      $window.off("debouncedresize.wsol.equalHeights.equalHeights-" + base.groupId, base.equalize);
    };

    base.init();
  };

  $.fn.wsol_equalHeights = function() {
    new $.wsol.equalHeights(this);

    return this;
  };

})(jQuery, window, document);
