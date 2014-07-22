/**
 * wsol.equalHeights.js 1.0.0
 * http://github.com/websolutions/equal-heights
 */


;(function ($, window, document, undefined) {

  var groupId = 0;

  function EqualHeights(group) {
    this.group = group;
    this.groupId = groupId++;

    this.setHeights = $.proxy(this.setHeights, this);

    this.init();
  }

  EqualHeights.prototype.init = function() {
    this.setHeights();

    // Handle events
    $(window).on("debouncedresize.equalHeights.equalHeights-" + this.groupId, this.setHeights);
    this.group.find("img").on("load.equalHeights", this.setHeights);
  };

  EqualHeights.prototype.setHeights = function() {
    var maxHeight = 0;
    this.group.css("height", "auto").each(function() {
      var itemHeight = $(this).outerHeight(true);
      if (itemHeight > maxHeight) maxHeight = itemHeight;
    }).css("height", maxHeight);
  };

  EqualHeights.prototype.destroy = function() {
    this.group.css("height", "");

    // Remove event listeners
    $(window).off(".equalHeights-" + this.groupId);
    this.group.find("img").off(".equalHeights");
  };

  $.fn.equalHeights = function() {
    var group = this, plugin = new EqualHeights(group);
    return group.each(function(index, element) {
      element.equalHeights = plugin;
    });
  };

  $.fn.unequalHeights = function() {
    var group = this;
    return group.each(function(index, element) {
      if (element.equalHeights) {
        element.equalHeights.destroy();
        return false; // no need to look at the rest of the elements
      }
    });
  };

})(jQuery, window, document);
