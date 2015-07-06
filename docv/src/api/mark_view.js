// Generated by CoffeeScript 1.9.2
define(function(require) {
  var CONST, MarkFactory, _, markTemplate;
  _ = require('lodash');
  require('jqueryui');
  markTemplate = function(mark) {
    return "<div class='mark-item " + mark.type + "' " + CONST.DATA_KEY + "='" + (JSON.stringify(mark.data)) + "' style='" + mark.style + "'> </div>";
  };
  CONST = {
    DATA_KEY: 'data-mark',
    TYPE_REG: /\s*(icon-arrow-[\w\-]+)\s*/i,
    SELECTOR: '.mark-item',
    TITLE: ''
  };
  $.widget('mark.mark', {
    _create: function() {
      return this.ele = $(this.element);
    },
    _destroy: function() {
      this.ele.remove();
      return this.ele = null;
    },
    getData: function() {
      return JSON.parse(this.ele.attr(CONST.DATA_KEY) || {});
    },
    getType: function() {
      var ref;
      return (ref = this.ele.attr('class').match(CONST.TYPE_REG)) != null ? ref[1] : void 0;
    },
    toJSON: function() {
      var data, ref, style, type;
      ref = [this.ele.attr('style'), this.getData(), this.getType()], style = ref[0], data = ref[1], type = ref[2];
      style = style.replace(/rgb\((.+)\)/i, function() {
        var b, dec, g, hex, i, len, r, ref1, ref2;
        hex = '#';
        ref1 = arguments[1].split(','), r = ref1[0], g = ref1[1], b = ref1[2];
        ref2 = [r, g, b];
        for (i = 0, len = ref2.length; i < len; i++) {
          dec = ref2[i];
          hex += _.padLeft(parseInt(dec, 10).toString(16), 2, 0);
        }
        return hex;
      });
      return {
        style: style,
        data: data,
        type: type
      };
    }
  });
  MarkFactory = (function() {
    function MarkFactory(options) {
      this.options = options;
      this.markList = [];
    }

    MarkFactory.prototype.render = function(marks) {
      var html, widgets;
      html = _.map(marks, function(mark) {
        var data, style, type;
        data = mark.data, type = mark.type, style = mark.style;
        return markTemplate({
          data: data,
          type: type,
          style: style
        });
      }).join('');
      widgets = $(html).mark();
      return this.markList = widgets;
    };

    return MarkFactory;

  })();
  return new MarkFactory();
});
