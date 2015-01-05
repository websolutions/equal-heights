/**
 * wsol.equalHeights.js 2.0.0
 * http://github.com/websolutions/equal-heights
 */

;(function ($, window, document, undefined) {
  if (!$.wsol) {
    $.wsol = {};
  }

  $.wsol.equalHeights = function(group) {
    var base = this;

    base.$group = $(group);
    base.group = group;

    base.$group.data("wsol.equalHeights", base);

    base.init = function() {
      base.equalize();

      // Handle events
      $(window).on("debouncedresize.wsol.equalHeights", base.equalize);
      base.$group.find("img").on("load.wsol.equalHeights", base.equalize);
    };

    base.equalize = function() {
      var maxHeight = 0;
      base.$group.css("height", "auto").each(function() {
        var itemHeight = $(this).outerHeight(true);
        if (itemHeight > maxHeight) maxHeight = itemHeight;
      }).css("height", maxHeight);
    };

    base.destroy = function() {
      base.$group.css("height", "");

      // Remove event listeners
      $(window).off(".wsol.equalHeights");
      base.$group.find("img").off(".wsol.equalHeights");
    };

    base.init();
  };

  $.fn.wsol_equalHeights = function() {
    new $.wsol.equalHeights(this);

    return this;
  };

})(jQuery, window, document);
